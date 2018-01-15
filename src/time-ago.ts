import { DateTime } from 'luxon';
import { timeAgo } from 'ur-humanize';

export class TimeAgoValueConverter {
    toView(value: DateTime, base?: DateTime) {
        if (value && value.isValid && (!base || base.isValid)) {
            return timeAgo(value, base);
        }
    }
}