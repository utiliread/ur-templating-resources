import { DateTime } from 'luxon';
var LocalTimeValueConverter = /** @class */ (function () {
    function LocalTimeValueConverter() {
    }
    LocalTimeValueConverter.prototype.toView = function (value, withSeconds) {
        if (value && value.isValid) {
            var format = withSeconds ? DateTime.TIME_WITH_SECONDS : DateTime.TIME_SIMPLE;
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalTimeValueConverter;
}());
export { LocalTimeValueConverter };
//# sourceMappingURL=local-time.js.map