import * as moment from 'moment';
var RelevantDateValueConverter = /** @class */ (function () {
    function RelevantDateValueConverter() {
    }
    RelevantDateValueConverter.prototype.toView = function (value) {
        if (value != null && value.isValid()) {
            var localNow = moment();
            var localValue = moment(value).local();
            // https://github.com/moment/moment/blob/master/src/lib/moment/calendar.js#L8
            if (Math.abs(localValue.diff(localNow, 'day', true)) < 6) {
                return localValue.calendar(localNow);
            }
            else if (localValue.isSame(localValue, 'day')) {
                // With date, without time.
                return localValue.format('ll');
            }
            else {
                // With date, with time.
                return localValue.format('lll');
            }
        }
        return null;
    };
    return RelevantDateValueConverter;
}());
export { RelevantDateValueConverter };
