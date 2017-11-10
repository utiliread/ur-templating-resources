import { isMoment, utc } from 'moment';
var defaultResolution = 'second';
var formats = {
    'second': 'YYYY-MM-DDTHH:mm:ss',
    'minute': 'YYYY-MM-DDTHH:mm',
    'hour': 'YYYY-MM-DDTHH:00'
};
var DatetimeLocalValueConverter = /** @class */ (function () {
    function DatetimeLocalValueConverter() {
    }
    DatetimeLocalValueConverter.prototype.toView = function (value, resolution) {
        resolution = resolution || defaultResolution;
        if (isMoment(value) && value.isValid()) {
            return value.format(formats[resolution]);
        }
    };
    DatetimeLocalValueConverter.prototype.fromView = function (value, resolution) {
        resolution = resolution || defaultResolution;
        return utc(value, formats[resolution]);
    };
    return DatetimeLocalValueConverter;
}());
export { DatetimeLocalValueConverter };
