"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ur_humanize_1 = require("ur-humanize");
class CasualTimeAgoValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return ur_humanize_1.casualTimeAgo(value, base);
        }
    }
}
exports.CasualTimeAgoValueConverter = CasualTimeAgoValueConverter;
//# sourceMappingURL=casual-time-ago.js.map