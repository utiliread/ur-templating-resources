"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var map = {
    short: luxon_1.DateTime.DATE_SHORT,
    med: luxon_1.DateTime.DATE_MED
};
var LocalDateValueConverter = /** @class */ (function () {
    function LocalDateValueConverter() {
    }
    LocalDateValueConverter.prototype.toView = function (value, kind) {
        if (value && value.isValid) {
            var format = map[kind || 'med'];
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalDateValueConverter;
}());
exports.LocalDateValueConverter = LocalDateValueConverter;
//# sourceMappingURL=local-date.js.map