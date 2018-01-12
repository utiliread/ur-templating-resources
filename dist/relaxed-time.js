import { DateTime } from 'luxon';
import { relaxedTime } from 'ur-humanize';
export class RelaxedTimeValueConverter {
    toView(value) {
        if (value instanceof DateTime && value.isValid) {
            return relaxedTime(value);
        }
    }
}
