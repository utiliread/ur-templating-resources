import { DateTime } from 'luxon';

export type Kind = 'short' | 'med';

const map: {[kind in Kind]: Intl.DateTimeFormatOptions} = {
    short: DateTime.DATE_SHORT,
    med: DateTime.DATE_MED
};

export class LocalDateValueConverter {
    toView(date: DateTime, kind?: Kind) {
        let format = map[kind || 'med'];
        return date.toLocal().toLocaleString(format);
    }
}