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
export { InverseValueConverter };
