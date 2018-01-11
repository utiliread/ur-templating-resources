import { DateTime } from 'luxon';

export class LocalTimeValueConverter {
    toView(time: DateTime, withSeconds?: boolean) {
        let format = withSeconds ? DateTime.TIME_WITH_SECONDS : DateTime.TIME_SIMPLE;
        return time.toLocal().toLocaleString(format);
    }
}