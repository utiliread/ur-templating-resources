import { DateTime } from 'luxon';
var map = {
    short: DateTime.DATE_SHORT,
    med: DateTime.DATE_MED
};
var LocalDateValueConverter = /** @class */ (function () {
    function LocalDateValueConverter() {
    }
    LocalDateValueConverter.prototype.toView = function (value, kind) {
        if (value && value.isValid) {
            var format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalDateValueConverter;
}());
export { LocalDateValueConverter };
//# sourceMappingURL=local-date.js.map