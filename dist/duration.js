import { duration, isDuration } from 'moment';
export class DurationValueConverter {
    toView(value) {
        if (isDuration(value)) {
            return value.toISOString();
        }
    }
    fromView(value) {
        return duration(value);
    }
}
