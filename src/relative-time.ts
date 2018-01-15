import { DateTime } from 'luxon';
import { relativeTime } from 'ur-humanize';

export class RelativeTimeValueConverter {
    toView(value: DateTime, base?: DateTime) {
        if (value && value.isValid && (!base || base.isValid)) {
            return relativeTime(value, base);
        }
    }
}