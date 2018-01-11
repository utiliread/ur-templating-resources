import { DateTime } from 'luxon';

export class LocalFormatValueConverter {
    toView(moment: DateTime, format: string) {
        return moment.toLocal().toFormat(format);
    }
}