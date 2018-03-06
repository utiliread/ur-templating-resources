"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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