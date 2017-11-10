var UpperValueConverter = /** @class */ (function () {
    function UpperValueConverter() {
    }
    UpperValueConverter.prototype.toView = function (value) {
        if (value) {
            return value.toLocaleUpperCase();
        }
    };
    return UpperValueConverter;
}());
export { UpperValueConverter };
