var HexValueConverter = /** @class */ (function () {
    function HexValueConverter() {
    }
    HexValueConverter.prototype.toView = function (value, padding) {
        var hex = value.toString(16);
        if (padding != null) {
            while (hex.length < padding) {
                hex = '0' + hex;
            }
        }
        return hex;
    };
    return HexValueConverter;
}());
export { HexValueConverter };
