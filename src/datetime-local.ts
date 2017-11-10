import { Moment, isMoment, utc } from 'moment';

export type Resolution = 'second' | 'minute' | 'hour';

const defaultResolution = 'second';

const formats = {
    'second': 'YYYY-MM-DDTHH:mm:ss',
    'minute': 'YYYY-MM-DDTHH:mm',
    'hour': 'YYYY-MM-DDTHH:00'
}

export class DatetimeLocalValueConverter {
    toView(value: any, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        if (isMoment(value) && value.isValid()) {
            return value.format(formats[resolution]);
        }
    }

    fromView(value: string, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        return utc(value, formats[resolution]);
    }
}