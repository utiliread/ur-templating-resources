import { DateTime } from 'luxon';
const map = {
    short: DateTime.DATE_SHORT,
    med: DateTime.DATE_MED
};
export class LocalDateValueConverter {
    toView(value, kind) {
        if (value && value.isValid) {
            let format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    }
}
//# sourceMappingURL=local-date.js.map