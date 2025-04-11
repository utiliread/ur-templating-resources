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
  @bindable()
  name?: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  selected: string = null;
  @bindable()
  items?: DataFormat[];
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
  queryFn?: (data: {
    $query: string;
    $pageNumber?: number;
  }) => Promise<DataFormat[]> | DataFormat[];

  selectElement!: HTMLSelectElement;
  private itemsCollectionSubscription?: Disposable;

  constructor(
    private taskQueue: TaskQueue,
    private bindingEngine: BindingEngine,
  ) {
    this.itemsCollectionChanged = this.itemsCollectionChanged.bind(this);
  }

  bind() {
    if (this.items) {
      this.itemsCollectionSubscription = this.bindingEngine
        .collectionObserver(this.items)
        .subscribe(this.itemsCollectionChanged);
    }
  }

  attached() {
    this.initSelect();

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

    // https://github.com/select2/select2/issues/2830#issuecomment-87647138

    // select2 adds a data-select2-id attribute to the selected option,
    // and this data attribute needs to be specifically cleared, as the
    // aurelia repeater does not remove the data attribute.
    // There seems to be three ways to achieve this

    // 1. (sounds bad, but it does exactly the job)
    // See. https://github.com/select2/select2/blob/master/src/js/select2/data/select.js#L121-L127
    // $(this.selectElement).data("select2").dataAdapter.destroy();

    // 2.
    // $(this.selectElement).select2("destroy");
    // this.initSelect();

    // 3.
    $(this.selectElement)
      .children("option")
      .each((_, option) => {
        // Remove the data-select2-id attribute
        delete option.dataset.select2Id;
      });
    this.scheduleRefresh();

    this.itemsCollectionSubscription = this.bindingEngine
      .collectionObserver(this.items)
      .subscribe(this.itemsCollectionChanged);
  }

  itemsCollectionChanged() {
    this.scheduleRefresh();
  }

  selectedChanged() {
    this.scheduleRefresh();
  }

  disabledChanged() {
    $(this.selectElement).prop("disabled", this.disabled);
  }

  private scheduled = false;
  private scheduleRefresh() {
    if (this.scheduled) {
      return;
    }
    this.scheduled = true;
    this.taskQueue.queueTask(() => {
      $(this.selectElement).val(this.selected).trigger("change");
      this.scheduled = false;
    });
  }

  private initSelect() {
    const options: Options<any, any> = {
      minimumInputLength: Number(this.minimumInputLength),
      theme: this.theme,
    };

    if (this.queryFn) {
      const queryFn = this.queryFn;

      options.ajax = {
        transport: (settings, success, failure) => {
          const data: any = settings.data;

          if (!success || !failure) {
            throw Error();
          }

          Promise.resolve(
            queryFn({ $query: data.q, $pageNumber: data.page || 1 }),
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

        const value = $(this.selectElement).val();
        this.selected = value as string;

        // Dispatch to raw select within the custom element.
        const notice = new Event("change", {
          bubbles: false,
        });
        this.selectElement.dispatchEvent(notice);
      });
  }
}

interface LookupObjectResult {
  items: DataFormat[];
  more: boolean;
}
