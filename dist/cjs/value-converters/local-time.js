"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalTimeValueConverter = void 0;
var luxon_1 = require("luxon");
var LocalTimeValueConverter = /** @class */ (function () {
    function LocalTimeValueConverter() {
    }
    LocalTimeValueConverter.prototype.toView = function (value, withSeconds) {
        if (value && value.isValid) {
            var format = withSeconds ? luxon_1.DateTime.TIME_WITH_SECONDS : luxon_1.DateTime.TIME_SIMPLE;
            return value.toLocal().toLocaleString(format);
        }
    };
    return LocalTimeValueConverter;
}());
exports.LocalTimeValueConverter = LocalTimeValueConverter;
//# sourceMappingURL=local-time.js.map