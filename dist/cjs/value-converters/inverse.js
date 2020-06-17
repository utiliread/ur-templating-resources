"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InverseValueConverter = void 0;
var InverseValueConverter = /** @class */ (function () {
    function InverseValueConverter() {
    }
    InverseValueConverter.prototype.toView = function (value) {
        return !value;
    };
    InverseValueConverter.prototype.fromView = function (value) {
        return !value;
    };
    return InverseValueConverter;
}());
exports.InverseValueConverter = InverseValueConverter;
//# sourceMappingURL=inverse.js.map