var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'select2';
import { bindable, bindingMode } from 'aurelia-framework';
import $ from 'jquery';
export class Select2SelectCustomElement {
    constructor() {
        this.selected = [];
        this.items = [];
        this.minimumInputLength = 0;
        this.placeholder = '';
    }
    bind(bindingContext) {
        this.bindingContext = bindingContext;
    }
    attached() {
        let options = {
            minimumInputLength: parseInt(this.minimumInputLength.toString())
        };
        if (this.query) {
            const query = this.query;
            options.ajax = {
                transport: (settings, success, failure) => {
                    let data = settings.data;
                    if (!success || !failure) {
                        throw Error();
                    }
                    let returnValue = query.call(this.bindingContext, data.q, data.page || 1);
                    Promise.resolve(returnValue)
                        .then((result) => {
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
__decorate([
    bindable(),
    __metadata("design:type", String)
], Select2SelectCustomElement.prototype, "name", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Array)
], Select2SelectCustomElement.prototype, "selected", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Array)
], Select2SelectCustomElement.prototype, "items", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], Select2SelectCustomElement.prototype, "minimumInputLength", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], Select2SelectCustomElement.prototype, "placeholder", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Function)
], Select2SelectCustomElement.prototype, "query", void 0);
//# sourceMappingURL=select2-select.js.map