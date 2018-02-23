import { DateTime } from 'luxon';

export type Kind = 'short' | 'med';

const map: {[kind in Kind]: Intl.DateTimeFormatOptions} = {
    short: DateTime.DATE_SHORT,
    med: DateTime.DATE_MED
};

export class LocalDateValueConverter {
    toView(value: DateTime, kind?: Kind) {
        if (value && value.isValid) {
            let format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    }
}