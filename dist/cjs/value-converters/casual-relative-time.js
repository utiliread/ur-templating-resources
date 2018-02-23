"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ur_humanize_1 = require("ur-humanize");
class CasualRelativeTimeValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return ur_humanize_1.casualRelativeTime(value, base);
        }
    }
}
exports.CasualRelativeTimeValueConverter = CasualRelativeTimeValueConverter;
//# sourceMappingURL=casual-relative-time.js.map