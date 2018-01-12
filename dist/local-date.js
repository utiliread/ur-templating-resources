import { DateTime } from 'luxon';
const map = {
    short: DateTime.DATE_SHORT,
    med: DateTime.DATE_MED
};
export class LocalDateValueConverter {
    toView(date, kind) {
        let format = map[kind || 'med'];
        return date.toLocal().toLocaleString(format);
    }
}
