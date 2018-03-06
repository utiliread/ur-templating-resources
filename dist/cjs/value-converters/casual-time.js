"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ur_humanize_1 = require("ur-humanize");
var CasualTimeValueConverter = /** @class */ (function () {
    function CasualTimeValueConverter() {
    }
    CasualTimeValueConverter.prototype.toView = function (value) {
        if (value && value.isValid) {
            return ur_humanize_1.casualTime(value);
        }
    };
    return CasualTimeValueConverter;
}());
exports.CasualTimeValueConverter = CasualTimeValueConverter;
//# sourceMappingURL=casual-time.js.map