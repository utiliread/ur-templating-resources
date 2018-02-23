import { DateTime } from 'luxon';
import { casualTime } from 'ur-humanize';

export class CasualTimeValueConverter {
    toView(value: DateTime) {
        if (value && value.isValid) {
            return casualTime(value);
        }
    }
}