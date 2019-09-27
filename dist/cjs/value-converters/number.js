"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberValueConverter = /** @class */ (function () {
    function NumberValueConverter() {
    }
    NumberValueConverter.prototype.toView = function (value) {
        return value;
    };
    NumberValueConverter.prototype.fromView = function (value) {
        return Number(value);
    };
    return NumberValueConverter;
}());
exports.NumberValueConverter = NumberValueConverter;
//# sourceMappingURL=number.js.map