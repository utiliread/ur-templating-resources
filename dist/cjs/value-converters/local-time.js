"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
class LocalTimeValueConverter {
    toView(value, withSeconds) {
        if (value && value.isValid) {
            let format = withSeconds ? luxon_1.DateTime.TIME_WITH_SECONDS : luxon_1.DateTime.TIME_SIMPLE;
            return value.toLocal().toLocaleString(format);
        }
    }
}
exports.LocalTimeValueConverter = LocalTimeValueConverter;
//# sourceMappingURL=local-time.js.map