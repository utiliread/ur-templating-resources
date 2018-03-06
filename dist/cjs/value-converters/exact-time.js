"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ur_humanize_1 = require("ur-humanize");
var ExactTimeValueConverter = /** @class */ (function () {
    function ExactTimeValueConverter() {
    }
    ExactTimeValueConverter.prototype.toView = function (value) {
        if (value && value.isValid) {
            return ur_humanize_1.exactTime(value);
        }
    };
    return ExactTimeValueConverter;
}());
exports.ExactTimeValueConverter = ExactTimeValueConverter;
//# sourceMappingURL=exact-time.js.map