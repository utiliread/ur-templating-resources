import { utc } from 'moment';
var RelevantDateValueConverter = /** @class */ (function () {
    function RelevantDateValueConverter() {
    }
    RelevantDateValueConverter.prototype.toView = function (value) {
        if (value != null && value.isValid()) {
            var now = utc();
            // https://github.com/moment/moment/blob/master/src/lib/moment/calendar.js#L8
            if (Math.abs(value.diff(now, 'day', true)) < 6) {
                return value.calendar(now);
            }
            else if (value.isSame(value, 'day')) {
                // With date, without time.
                return value.format('ll');
            }
            else {
                // With date, with time.
                return value.format('lll');
            }
        }
        return null;
    };
    return RelevantDateValueConverter;
}());
export { RelevantDateValueConverter };
