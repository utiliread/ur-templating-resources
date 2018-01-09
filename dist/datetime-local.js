import * as moment from 'moment';
import { isMoment } from 'moment';
const defaultResolution = 'second';
const formats = {
    'second': 'YYYY-MM-DDTHH:mm:ss',
    'minute': 'YYYY-MM-DDTHH:mm',
    'hour': 'YYYY-MM-DDTHH:00'
};
export class DatetimeLocalValueConverter {
    toView(value, resolution) {
        resolution = resolution || defaultResolution;
        if (isMoment(value) && value.isValid()) {
            return moment(value).local().format(formats[resolution]);
        }
    }
    fromView(value, resolution) {
        resolution = resolution || defaultResolution;
        return moment(value, formats[resolution]).utc();
    }
}
