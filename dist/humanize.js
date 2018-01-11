import { DateTime } from 'luxon';
import { Humanize } from 'ur-humanize';
export class RelevantDateValueConverter {
    toView(value) {
        if (value instanceof DateTime && value.isValid) {
            return Humanize.default(value);
        }
    }
}
