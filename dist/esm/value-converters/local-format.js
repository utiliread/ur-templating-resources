var LocalFormatValueConverter = /** @class */ (function () {
    function LocalFormatValueConverter() {
    }
    LocalFormatValueConverter.prototype.toView = function (value, format) {
        if (value && value.isValid) {
            return value.toLocal().toFormat(format);
        }
    };
    return LocalFormatValueConverter;
}());
export { LocalFormatValueConverter };
//# sourceMappingURL=local-format.js.map