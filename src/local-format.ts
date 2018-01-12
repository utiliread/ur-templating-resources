import { DateTime } from 'luxon';

export class LocalFormatValueConverter {
    toView(dateTime: DateTime, format: string) {
        return dateTime.toLocal().toFormat(format);
    }
}