import { DateTime } from 'luxon';

export type Kind = 'short' | 'med';

const map: {[kind in Kind]: Intl.DateTimeFormatOptions} = {
    short: DateTime.DATETIME_SHORT,
    med: DateTime.DATETIME_MED
};

export class LocalDateTimeValueConverter {
    toView(dateTime: DateTime, kind?: Kind) {
        let format = map[kind || 'med'];
        return dateTime.toLocal().toLocaleString(format);
    }
}