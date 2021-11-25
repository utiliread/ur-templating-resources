import { DateTime } from 'luxon';
var map = {
    short: DateTime.DATETIME_SHORT,
    med: DateTime.DATETIME_MED
};
var LocalDateTimeValueConverter = /** @class */ (function () {
    function LocalDateTimeValueConverter() {
    }
    LocalDateTimeValueConverter.prototype.toView = function (value, kind) {
        if (value && value.isValid) {
            var format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalDateTimeValueConverter;
}());
export { LocalDateTimeValueConverter };
//# sourceMappingURL=local-date-time.js.map