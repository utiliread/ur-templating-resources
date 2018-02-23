"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ur_humanize_1 = require("ur-humanize");
class ExactTimeValueConverter {
    toView(value) {
        if (value && value.isValid) {
            return ur_humanize_1.exactTime(value);
        }
    }
}
exports.ExactTimeValueConverter = ExactTimeValueConverter;
//# sourceMappingURL=exact-time.js.map