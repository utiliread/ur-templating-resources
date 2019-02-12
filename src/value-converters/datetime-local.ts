import { DateTime } from 'luxon';

export type Resolution = 'second' | 'minute' | 'hour';

const defaultResolution = 'minute';

const truncateLengths: {[resolution in Resolution]: number} = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
}

export class DatetimeLocalValueConverter {
    toView(value: any, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        if (value && value.isValid) {
            const truncateLength = truncateLengths[resolution];
            const result = value.toLocal().toISO().substr(0, truncateLength);

            return resolution === 'hour' ? result + ':00' : result;
        }
    }

    fromView(value: string, resolution: Resolution) {
        resolution = resolution || defaultResolution;

        const local = DateTime.fromISO(value);

        if (+local !== +local.startOf(resolution)) {
            return DateTime.invalid("The value does not satisfy the resolution");
        }

        return local.toUTC();
    }
}