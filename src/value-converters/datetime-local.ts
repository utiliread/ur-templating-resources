import { DateTime } from 'luxon';

export type Resolution = 'second' | 'minute' | 'hour';

const defaultResolution = 'minute';

const truncateLengths: { [resolution in Resolution]: number } = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
}

export class DatetimeLocalValueConverter {
    toView(value: DateTime, resolution?: Resolution) {
        resolution = resolution ?? defaultResolution;

        if (value && value.isValid) {
            const truncateLength = truncateLengths[resolution];
            const result = value.toLocal().toISO().substr(0, truncateLength);

            return resolution === 'hour' ? result + ':00' : result;
        }
    }

    fromView(value: string, resolution?: Resolution, exact?: boolean) {
        resolution = resolution ?? defaultResolution;

        let result = DateTime.fromISO(value, { setZone: true }).startOf(resolution).toUTC();

        if (!exact && result.year < 100) {
            const currentYear = DateTime.local().year;
            const nearestCentury = Math.round(currentYear / 100) * 100;
            result = result.plus({ years: nearestCentury });
        }

        return result;
    }
}