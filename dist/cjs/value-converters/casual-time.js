"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasualTimeValueConverter = void 0;
var ur_humanize_1 = require("ur-humanize");
var CasualTimeValueConverter = /** @class */ (function () {
    function CasualTimeValueConverter() {
    }
    CasualTimeValueConverter.prototype.toView = function (value) {
        if (value && value.isValid) {
            return (0, ur_humanize_1.casualTime)(value);
        }
    };
    return CasualTimeValueConverter;
}());
exports.CasualTimeValueConverter = CasualTimeValueConverter;
//# sourceMappingURL=casual-time.js.map