import { DateTime } from 'luxon';
import { Humanize } from 'ur-humanize';

export class HumanizeValueConverter {
    toView(value: DateTime) {
        if (value instanceof DateTime && value.isValid) {
            return Humanize.default(value);
        }
    }
}