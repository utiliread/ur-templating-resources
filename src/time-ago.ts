import { DateTime } from "luxon";
import { timeAgo } from 'ur-humanize';

export class TimeAgoValueConverter {
    toView(date: DateTime, base?: DateTime) {
        return timeAgo(date, base);
    }
}