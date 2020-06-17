import { DateTime } from 'luxon';
var defaultResolution = 'minute';
var truncateLengths = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
};
var DatetimeLocalValueConverter = /** @class */ (function () {
    function DatetimeLocalValueConverter() {
    }
    DatetimeLocalValueConverter.prototype.toView = function (value, resolution) {
        resolution = resolution !== null && resolution !== void 0 ? resolution : defaultResolution;
        if (value && value.isValid) {
            var truncateLength = truncateLengths[resolution];
            var result = value.toLocal().toISO().substr(0, truncateLength);
            return resolution === 'hour' ? result + ':00' : result;
        }
    };
    DatetimeLocalValueConverter.prototype.fromView = function (value, resolution, exact) {
        resolution = resolution !== null && resolution !== void 0 ? resolution : defaultResolution;
        var result = DateTime.fromISO(value, { setZone: true }).startOf(resolution).toUTC();
        if (!exact && result.year < 100) {
            var currentYear = DateTime.local().year;
            var nearestCentury = Math.round(currentYear / 100) * 100;
            result = result.plus({ years: nearestCentury });
        }
        return result;
    };
    return DatetimeLocalValueConverter;
}());
export { DatetimeLocalValueConverter };
//# sourceMappingURL=datetime-local.js.map