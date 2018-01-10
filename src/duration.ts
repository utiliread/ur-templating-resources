import { Duration } from 'luxon';

export class DurationValueConverter {
    toView(value: any) {
        if (value instanceof Duration) {
            return value.toISO();
        }
    }

    fromView(value: string) {
        return Duration.fromISO(value);
    }
}