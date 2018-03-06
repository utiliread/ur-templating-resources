var LowerValueConverter = /** @class */ (function () {
    function LowerValueConverter() {
    }
    LowerValueConverter.prototype.toView = function (value) {
        if (value) {
            return value.toLocaleLowerCase();
        }
    };
    return LowerValueConverter;
}());
export { LowerValueConverter };
//# sourceMappingURL=lower.js.map