import { DateTime } from 'luxon';

export class LocalFormatValueConverter {
    toView(value: DateTime, format: string) {
        if (value && value.isValid) {
            return value.toLocal().toFormat(format);
        }
    }
}