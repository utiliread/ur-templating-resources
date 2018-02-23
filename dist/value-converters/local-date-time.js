import { DateTime } from 'luxon';
const map = {
    short: DateTime.DATETIME_SHORT,
    med: DateTime.DATETIME_MED
};
export class LocalDateTimeValueConverter {
    toView(value, kind) {
        if (value && value.isValid) {
            let format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    }
}
