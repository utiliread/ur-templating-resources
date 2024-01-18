import "select2";

import {
  BindingEngine,
  Disposable,
  TaskQueue,
  autoinject,
  bindable,
  bindingMode,
} from "aurelia-framework";
import { DataFormat, Options } from "select2";

import $ from "jquery";

@autoinject()
export class Select2SelectCustomElement {
  private bindingContext: any;

  @bindable()
  name?: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  selected: string = null;
  @bindable()
  items: DataFormat[] = [];
  @bindable()
  minimumInputLength: string | number = 0;
  @bindable()
  placeholder = "";
  @bindable()
  disabled: boolean;
  @bindable()
  autofocus: boolean;
  @bindable()
  theme = "default";

  @bindable()
  query?: (
    q: string,
    pageNumber?: number
  ) => Promise<{ id: string; text: string }[] | { id: string; text: string }[]>;

  selectElement!: HTMLSelectElement;
  private itemsCollectionSubscription?: Disposable;

  constructor(
    private taskQueue: TaskQueue,
    private bindingEngine: BindingEngine
  ) {
    this.itemsCollectionChanged = this.itemsCollectionChanged.bind(this);
  }

  bind(bindingContext: any) {
    this.bindingContext = bindingContext;

    if (this.items) {
      this.itemsCollectionSubscription = this.bindingEngine
        .collectionObserver(this.items)
        .subscribe(this.itemsCollectionChanged);
    }
  }

  attached() {
    const options: Options<any, any> = {
      minimumInputLength: Number(this.minimumInputLength),
      theme: this.theme,
    };

    if (this.items) {
      options.data = this.items;
    } else if (this.query) {
      const query = this.query;

      options.ajax = {
        transport: (settings, success, failure) => {
          const data: any = settings.data;

          if (!success || !failure) {
            throw Error();
          }

          Promise.resolve(
            query.call(this.bindingContext, data.q, data.page || 1)
          )
            .then((result: LookupObjectResult | DataFormat[]) => {
              if (Array.isArray(result)) {
                success({
                  results: result,
                });
              } else if (result) {
                success({
                  results: result.items,
                  pagination: {
                    more: !!result.more,
                  },
                });
              } else {
                success({
                  results: [],
                });
              }
            })
            .catch(() => {
              failure();
            });

          return undefined;
        },
        delay: 250,
        cache: true,
      };
    }

    $(this.selectElement)
      .select2(options)
      .val(this.selected)
      .trigger("change")
      .prop("disabled", this.disabled)
      .on("change", (event) => {
        // Don't propagate endlessly
        if (event.originalEvent) {
          return;
        }

        // Dispatch to raw select within the custom element.
        const notice = new Event("change", {
          bubbles: false,
        });
        this.selectElement.dispatchEvent(notice);
      });

    if (this.autofocus) {
      // Queue the open until after the control is displayed to ensure that it opens below the select control
      this.taskQueue.queueTask(() => $(this.selectElement).select2("open"));
    }
  }

  detached() {
    $(this.selectElement).select2("destroy");

    if (this.itemsCollectionSubscription) {
      this.itemsCollectionSubscription.dispose();
      this.itemsCollectionSubscription = undefined;
    }
  }

  itemsChanged() {
    this.itemsCollectionSubscription?.dispose();

    // select2 adds a data-select2-id attribute to the selected option,
    // and this data attribute needs to be specifically cleared, as the
    // aurelia repeater does not remove the data attribute.
    // There seems to be two ways to achieve this

    // 1. (sounds bad, but it does exactly the job)
    // See. https://github.com/select2/select2/blob/master/src/js/select2/data/select.js#L121-L127
    // $(this.selectElement).data("select2").dataAdapter.destroy();

    // 2.
    $(this.selectElement).children("option").each((_, option) => {
      // Remove the data-select2-id attribute
      delete option.dataset.select2Id;
    });

    this.itemsCollectionSubscription = this.bindingEngine
      .collectionObserver(this.items)
      .subscribe(this.itemsCollectionChanged);
  }

  itemsCollectionChanged() {
    $(this.selectElement).trigger("change");
  }

  selectedChanged() {
    $(this.selectElement).val(this.selected).trigger("change");
  }

  disabledChanged() {
    $(this.selectElement).prop("disabled", this.disabled);
  }
}

interface LookupObjectResult {
  items: DataFormat[];
  more: boolean;
}
