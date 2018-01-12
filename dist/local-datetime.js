import { DateTime } from 'luxon';
const map = {
    short: DateTime.DATETIME_SHORT,
    med: DateTime.DATETIME_MED
};
export class LocalDateTimeValueConverter {
    toView(dateTime, kind) {
        let format = map[kind || 'med'];
        return dateTime.toLocal().toLocaleString(format);
    }
}
