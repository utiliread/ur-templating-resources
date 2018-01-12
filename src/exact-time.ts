import { DateTime } from 'luxon';
import { exactTime } from 'ur-humanize';

export class ExactTimeValueConverter {
    toView(value: DateTime) {
        if (value instanceof DateTime && value.isValid) {
            return exactTime(value);
        }
    }
}