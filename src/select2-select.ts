import 'select2';

import { bindable, bindingMode } from 'aurelia-framework';

import $ from 'jquery';
import { Select2Item } from './select2-item';

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
    query?: (q: string) => Promise<{ id: string; text: string }[] | { id: string; text: string }[]>;

    element!: HTMLSelectElement;

    bind(bindingContext: any) {
        this.bindingContext = bindingContext;
    }

    attached() {
        let options: Select2Options = {
            minimumInputLength: parseInt(this.minimumInputLength.toString())
        };

        if (this.query) {
            const query = this.query;
            
            options.ajax = {
                transport: (settings, success, failure) => {
                    let data: any = settings.data;

                    if (!success || !failure) {
                        throw Error();
                    }

                    let returnValue = query.call(this.bindingContext, data.q, data.page || 1);
    
                    Promise.resolve(returnValue)
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

        $(this.element)
            .select2(options)
            .val(this.selected).trigger('change')
            .on('change', event => {
                // Don't propagate endlessly
                if (event.originalEvent) {
                    return;
                }

                // Dispatch to raw select within the custom element.
                let notice = new Event('change', {
                    bubbles: false
                });
                this.element.dispatchEvent(notice);
            });
    }

    detached() {
        $(this.element).select2('destroy');
    }

    selectedChanged() {
        $(this.element).val(this.selected).trigger('change');
    }
}

interface LookupObjectResult {
    items: Select2Item[];
    more: boolean;
}