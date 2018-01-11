import { DateTime } from "luxon";
import { Humanize } from 'ur-humanize';

export class RelativeValueConverter {
    toView(date: DateTime, base?: DateTime) {
        return Humanize.relative(date, base);
    }
}