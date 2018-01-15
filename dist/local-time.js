import { DateTime } from 'luxon';
export class LocalTimeValueConverter {
    toView(value, withSeconds) {
        if (value && value.isValid) {
            let format = withSeconds ? DateTime.TIME_WITH_SECONDS : DateTime.TIME_SIMPLE;
            return value.toLocal().toLocaleString(format);
        }
    }
}
