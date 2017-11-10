import { Duration, duration, isDuration } from 'moment';

export class DurationValueConverter {
    toView(value: any) {
        if (isDuration(value)) {
            return value.toISOString();
        }
    }

    fromView(value: string) {
        return duration(value);
    }
}