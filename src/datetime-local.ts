import * as moment from 'moment';

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
            return moment(value).local().format(formats[resolution]);
        }
    }

    fromView(value: string, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        return moment(value, formats[resolution]).utc();
    }
}