import { DateTime } from 'luxon';
const defaultResolution = 'second';
const truncateLengths = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
};
export class DatetimeLocalValueConverter {
    toView(value, resolution) {
        resolution = resolution || defaultResolution;
        if (value instanceof DateTime && value.isValid) {
            let truncateLength = truncateLengths[resolution];
            let result = value.toLocal().toISO().substr(0, truncateLength);
            return resolution === 'hour' ? result + ':00' : result;
        }
    }
    fromView(value, resolution) {
        resolution = resolution || defaultResolution;
        return DateTime.fromISO(value).toUTC();
    }
}
