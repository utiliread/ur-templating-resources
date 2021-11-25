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
export { NumberValueConverter };
//# sourceMappingURL=number.js.map