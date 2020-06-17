"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasualRelativeTimeValueConverter = void 0;
var ur_humanize_1 = require("ur-humanize");
var CasualRelativeTimeValueConverter = /** @class */ (function () {
    function CasualRelativeTimeValueConverter() {
    }
    CasualRelativeTimeValueConverter.prototype.toView = function (value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return ur_humanize_1.casualRelativeTime(value, base);
        }
    };
    return CasualRelativeTimeValueConverter;
}());
exports.CasualRelativeTimeValueConverter = CasualRelativeTimeValueConverter;
//# sourceMappingURL=casual-relative-time.js.map