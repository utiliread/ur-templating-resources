"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTimeValueConverter = void 0;
var luxon_1 = require("luxon");
var map = {
    short: luxon_1.DateTime.DATETIME_SHORT,
    med: luxon_1.DateTime.DATETIME_MED
};
var LocalDateTimeValueConverter = /** @class */ (function () {
    function LocalDateTimeValueConverter() {
    }
    LocalDateTimeValueConverter.prototype.toView = function (value, kind) {
        if (value && value.isValid) {
            var format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalDateTimeValueConverter;
}());
exports.LocalDateTimeValueConverter = LocalDateTimeValueConverter;
//# sourceMappingURL=local-date-time.js.map