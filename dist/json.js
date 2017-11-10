var JsonValueConverter = /** @class */ (function () {
    function JsonValueConverter() {
    }
    JsonValueConverter.prototype.toView = function (value) {
        return JSON.stringify(value);
    };
    JsonValueConverter.prototype.fromView = function (value) {
        return JSON.parse(value);
    };
    return JsonValueConverter;
}());
export { JsonValueConverter };
