"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExactTimeValueConverter = void 0;
var ur_humanize_1 = require("ur-humanize");
var ExactTimeValueConverter = /** @class */ (function () {
    function ExactTimeValueConverter() {
    }
    ExactTimeValueConverter.prototype.toView = function (value, includeSeconds) {
        if (value && value.isValid) {
            return (0, ur_humanize_1.exactTime)(value, includeSeconds);
        }
    };
    return ExactTimeValueConverter;
}());
exports.ExactTimeValueConverter = ExactTimeValueConverter;
//# sourceMappingURL=exact-time.js.map