import { Duration } from 'luxon';
export class DurationValueConverter {
    toView(value) {
        if (value instanceof Duration) {
            return value.toISO();
        }
    }
    fromView(value) {
        return Duration.fromISO(value);
    }
}
