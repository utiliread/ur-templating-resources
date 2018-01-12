import { relativeTime } from 'ur-humanize';
export class RelativeTimeValueConverter {
    toView(date, base) {
        return relativeTime(date, base);
    }
}
