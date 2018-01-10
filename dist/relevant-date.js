import { DateTime } from 'luxon';
import { Humanize } from 'ur-humanize';
export class RelevantDateValueConverter {
    toView(value) {
        if (value instanceof DateTime && value.isValid) {
            let diff = value.diffNow();
            if (Math.abs(diff.as('hours')) < 1) {
                return Humanize.ago(value);
            }
            else if (DateTime.local().hasSame(value, 'day')) {
                // Time only
                return value.toLocaleString(DateTime.TIME_SIMPLE);
            }
            else if (Math.abs(diff.as('days')) < 7) {
                return Humanize.ago(value);
            }
            else {
                // Date only
                return value.toLocaleString(DateTime.DATE_MED);
            }
        }
        return null;
    }
}
