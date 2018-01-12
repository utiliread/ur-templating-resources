import { DateTime } from 'luxon';
import { relevantTime } from 'ur-humanize';
export class RelevantTimeValueConverter {
    toView(value) {
        if (value instanceof DateTime && value.isValid) {
            return relevantTime(value);
        }
    }
}
