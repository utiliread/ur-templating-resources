"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const map = {
    short: luxon_1.DateTime.DATETIME_SHORT,
    med: luxon_1.DateTime.DATETIME_MED
};
class LocalDateTimeValueConverter {
    toView(value, kind) {
        if (value && value.isValid) {
            let format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    }
}
exports.LocalDateTimeValueConverter = LocalDateTimeValueConverter;
//# sourceMappingURL=local-date-time.js.map