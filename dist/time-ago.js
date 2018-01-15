import { timeAgo } from 'ur-humanize';
export class TimeAgoValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return timeAgo(value, base);
        }
    }
}
