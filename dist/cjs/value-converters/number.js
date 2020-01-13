"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberValueConverter = /** @class */ (function () {
    function NumberValueConverter() {
    }
    NumberValueConverter.prototype.toView = function (value) {
        return value;
    };
    NumberValueConverter.prototype.fromView = function (value, emptyValue) {
        if (emptyValue === void 0) { emptyValue = 0; }
        if (value === "") {
            return emptyValue;
        }
        return Number(value);
    };
    return NumberValueConverter;
}());
exports.NumberValueConverter = NumberValueConverter;
//# sourceMappingURL=number.js.map