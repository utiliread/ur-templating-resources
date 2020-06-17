"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValueConverter = void 0;
var NumberValueConverter = /** @class */ (function () {
    function NumberValueConverter() {
    }
    NumberValueConverter.prototype.toView = function (value) {
        return value;
    };
    NumberValueConverter.prototype.fromView = function (value, emptyValue) {
        if (value === "" && arguments.length === 2) {
            return emptyValue;
        }
        return Number(value);
    };
    return NumberValueConverter;
}());
exports.NumberValueConverter = NumberValueConverter;
//# sourceMappingURL=number.js.map