import { DateTime } from "luxon";
import { Humanize } from 'ur-humanize';

export class AgoValueConverter {
    toView(date: DateTime, base?: DateTime) {
        return Humanize.ago(date, base);
    }
}