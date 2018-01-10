import { DateTime } from 'luxon';

export type Resolution = 'second' | 'minute' | 'hour';

const defaultResolution = 'second';

const truncateLengths: {[resolution in Resolution]: number} = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
}

export class DatetimeLocalValueConverter {
    toView(value: any, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        if (value instanceof DateTime && value.isValid) {
            let truncateLength = truncateLengths[resolution];

            let result = value.toLocal().toISO().substr(0, truncateLength);

            return resolution === 'hour' ? result + ':00' : result;
        }
    }

    fromView(value: string, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        return DateTime.fromISO(value).toUTC();
    }
}