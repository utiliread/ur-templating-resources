import * as moment from 'moment';
import { isMoment } from 'moment';
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
            return moment(value).local().format(formats[resolution]);
        }
    };
    DatetimeLocalValueConverter.prototype.fromView = function (value, resolution) {
        resolution = resolution || defaultResolution;
        return moment(value, formats[resolution]).utc();
    };
    return DatetimeLocalValueConverter;
}());
export { DatetimeLocalValueConverter };
