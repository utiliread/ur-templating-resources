import { DateTime } from 'luxon';
import { relaxedTime } from 'ur-humanize';

export class RelaxedTimeValueConverter {
    toView(value: DateTime) {
        if (value && value.isValid) {
            return relaxedTime(value);
        }
    }
}