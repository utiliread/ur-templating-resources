var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { ButtonSelectCustomElement } from './button-select';
var ButtonOptionCustomElement = /** @class */ (function () {
    function ButtonOptionCustomElement(parent) {
        this.parent = parent;
    }
    Object.defineProperty(ButtonOptionCustomElement.prototype, "isActive", {
        get: function () {
            return this.value === this.parent.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonOptionCustomElement.prototype.select = function () {
        this.parent.value = this.value;
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], ButtonOptionCustomElement.prototype, "value", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], ButtonOptionCustomElement.prototype, "btnClass", void 0);
    __decorate([
        computedFrom('value', 'parent.value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ButtonOptionCustomElement.prototype, "isActive", null);
    ButtonOptionCustomElement = __decorate([
        autoinject(),
        __metadata("design:paramtypes", [ButtonSelectCustomElement])
    ], ButtonOptionCustomElement);
    return ButtonOptionCustomElement;
}());
export { ButtonOptionCustomElement };
//# sourceMappingURL=button-option.js.map