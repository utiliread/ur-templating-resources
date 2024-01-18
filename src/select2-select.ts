import 'select2';

import { TaskQueue, autoinject, bindable, bindingMode } from 'aurelia-framework';

import $ from 'jquery';
import { Options } from 'select2';
import { Select2Item } from './select2-item';

@autoinject()
export class Select2SelectCustomElement {
    private bindingContext: any;

    @bindable()
    name?: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selected: string[] = [];
    @bindable()
    items: Select2Item[] = [];
    @bindable()
    minimumInputLength: string | number = 0;
    @bindable()
    placeholder = '';
    @bindable()
    disabled: boolean;
    @bindable()
    autofocus: boolean;
    @bindable()
    theme = "default";

    @bindable()
    query?: (q: string, pageNumber?: number) => Promise<{ id: string; text: string }[] | { id: string; text: string }[]>;

    selectElement!: HTMLSelectElement;

    constructor(private taskQueue: TaskQueue) {
    }

    bind(bindingContext: any) {
        this.bindingContext = bindingContext;
    }

    attached() {
        let options: Options<any, any> = {
            minimumInputLength: Number(this.minimumInputLength),
            theme: this.theme
        };

        if (this.query) {
            const query = this.query;
            
            options.ajax = {
                transport: (settings, success, failure) => {
                    const data: any = settings.data;

                    if (!success || !failure) {
                        throw Error();
                    }

                    Promise.resolve(query.call(this.bindingContext, data.q, data.page || 1))
                        .then((result: LookupObjectResult | Select2Item[]) => {
                            if (Array.isArray(result)) {
                                success({
                                    results: result
                                });
                            }
                            else if (result) {
                                success({
                                    results: result.items,
                                    pagination: {
                                        more: !!result.more
                                    }
                                });
                            }
                            else {
                                success({
                                    results: []
                                });
                            }
                        })
                        .catch(() => {
                            failure();
                        });

                    return undefined;
                },
                delay: 250,
                cache: true
            };
        }

        $(this.selectElement)
            .select2(options)
            .val(this.selected).trigger('change')
            .prop("disabled", this.disabled)
            .on('change', event => {
                // Don't propagate endlessly
                if (event.originalEvent) {
                    return;
                }

                // Dispatch to raw select within the custom element.
                let notice = new Event('change', {
                    bubbles: false
                });
                this.selectElement.dispatchEvent(notice);
            });
        
        if (this.autofocus) {
            // Queue the open until after the control is displayed to ensure that it opens below the select control
            this.taskQueue.queueTask(() => $(this.selectElement).select2('open'));
        }
    }

    detached() {
        $(this.selectElement).select2('destroy');
    }

    selectedChanged() {
        $(this.selectElement).val(this.selected).trigger('change');
    }

    disabledChanged() {
        $(this.selectElement).prop("disabled", this.disabled);
    }
}

interface LookupObjectResult {
    items: Select2Item[];
    more: boolean;
}