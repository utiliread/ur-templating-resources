"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonOptionCustomElement = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var button_select_1 = require("./button-select");
var ButtonOptionCustomElement = /** @class */ (function () {
    function ButtonOptionCustomElement(parent) {
        this.parent = parent;
    }
    Object.defineProperty(ButtonOptionCustomElement.prototype, "isActive", {
        get: function () {
            return this.value === this.parent.value;
        },
        enumerable: false,
        configurable: true
    });
    ButtonOptionCustomElement.prototype.select = function () {
        this.parent.value = this.value;
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], ButtonOptionCustomElement.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", String)
    ], ButtonOptionCustomElement.prototype, "btnClass", void 0);
    __decorate([
        aurelia_framework_1.computedFrom('value', 'parent.value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ButtonOptionCustomElement.prototype, "isActive", null);
    ButtonOptionCustomElement = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [button_select_1.ButtonSelectCustomElement])
    ], ButtonOptionCustomElement);
    return ButtonOptionCustomElement;
}());
exports.ButtonOptionCustomElement = ButtonOptionCustomElement;
//# sourceMappingURL=button-option.js.map