var IntegerValueConverter = /** @class */ (function () {
    function IntegerValueConverter() {
    }
    IntegerValueConverter.prototype.toView = function (n) {
        return n != null ? n.toString() : '';
    };
    IntegerValueConverter.prototype.fromView = function (s) {
        return s != null ? parseInt(s) : null;
    };
    return IntegerValueConverter;
}());
export { IntegerValueConverter };
