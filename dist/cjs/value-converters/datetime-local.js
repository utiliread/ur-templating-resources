"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const defaultResolution = 'minute';
const truncateLengths = {
    'second': 'YYYY-MM-DDTHH:mm:ss'.length,
    'minute': 'YYYY-MM-DDTHH:mm'.length,
    'hour': 'YYYY-MM-DDTHH'.length
};
class DatetimeLocalValueConverter {
    toView(value, resolution) {
        resolution = resolution || defaultResolution;
        if (value && value.isValid) {
            let truncateLength = truncateLengths[resolution];
            let result = value.toLocal().toISO().substr(0, truncateLength);
            return resolution === 'hour' ? result + ':00' : result;
        }
    }
    fromView(value, resolution) {
        resolution = resolution || defaultResolution;
        return luxon_1.DateTime.fromISO(value).toUTC();
    }
}
exports.DatetimeLocalValueConverter = DatetimeLocalValueConverter;
//# sourceMappingURL=datetime-local.js.map