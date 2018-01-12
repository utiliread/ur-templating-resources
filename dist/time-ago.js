import { timeAgo } from 'ur-humanize';
export class TimeAgoValueConverter {
    toView(date, base) {
        return timeAgo(date, base);
    }
}
