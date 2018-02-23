"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ur_humanize_1 = require("ur-humanize");
class CasualTimeValueConverter {
    toView(value) {
        if (value && value.isValid) {
            return ur_humanize_1.casualTime(value);
        }
    }
}
exports.CasualTimeValueConverter = CasualTimeValueConverter;
//# sourceMappingURL=casual-time.js.map