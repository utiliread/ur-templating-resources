"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const map = {
    short: luxon_1.DateTime.DATE_SHORT,
    med: luxon_1.DateTime.DATE_MED
};
class LocalDateValueConverter {
    toView(value, kind) {
        if (value && value.isValid) {
            let format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    }
}
exports.LocalDateValueConverter = LocalDateValueConverter;
//# sourceMappingURL=local-date.js.map