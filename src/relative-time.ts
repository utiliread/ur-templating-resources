import { DateTime } from "luxon";
import { relativeTime } from 'ur-humanize';

export class RelativeTimeValueConverter {
    toView(date: DateTime, base?: DateTime) {
        return relativeTime(date, base);
    }
}