import { DateTime } from 'luxon';

export class ToLocalFormatValueConverter {
    toView(moment: DateTime, format: string) {
        return moment.toLocal().toFormat(format);
    }
}