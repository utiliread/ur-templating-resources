import { DateTime } from 'luxon';
export class LocalTimeValueConverter {
    toView(time, withSeconds) {
        let format = withSeconds ? DateTime.TIME_WITH_SECONDS : DateTime.TIME_SIMPLE;
        return time.toLocal().toLocaleString(format);
    }
}
