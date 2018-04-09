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
var Select2SelectCustomElement = /** @class */ (function () {
    function Select2SelectCustomElement() {
        this.selected = [];
        this.items = [];
        this.minimumInputLength = 0;
        this.placeholder = '';
    }
    Select2SelectCustomElement.prototype.bind = function (bindingContext) {
        this.bindingContext = bindingContext;
    };
    Select2SelectCustomElement.prototype.attached = function () {
        var _this = this;
        var options = {
            minimumInputLength: parseInt(this.minimumInputLength.toString())
        };
        if (this.query) {
            var query_1 = this.query;
            options.ajax = {
                transport: function (settings, success, failure) {
                    var data = settings.data;
                    if (!success || !failure) {
                        throw Error();
                    }
                    var returnValue = query_1.call(_this.bindingContext, data.q, data.page || 1);
                    Promise.resolve(returnValue)
                        .then(function (result) {
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
                        .catch(function () {
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
            .on('change', function (event) {
            // Don't propagate endlessly
            if (event.originalEvent) {
                return;
            }
            // Dispatch to raw select within the custom element.
            var notice = new Event('change', {
                bubbles: false
            });
            _this.element.dispatchEvent(notice);
        });
    };
    Select2SelectCustomElement.prototype.detached = function () {
        $(this.element).select2('destroy');
    };
    Select2SelectCustomElement.prototype.selectedChanged = function () {
        $(this.element).val(this.selected).trigger('change');
    };
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
    return Select2SelectCustomElement;
}());
export { Select2SelectCustomElement };
//# sourceMappingURL=select2-select.js.map