"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ur_humanize_1 = require("ur-humanize");
var CasualTimeAgoValueConverter = /** @class */ (function () {
    function CasualTimeAgoValueConverter() {
    }
    CasualTimeAgoValueConverter.prototype.toView = function (value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return ur_humanize_1.casualTimeAgo(value, base);
        }
    };
    return CasualTimeAgoValueConverter;
}());
exports.CasualTimeAgoValueConverter = CasualTimeAgoValueConverter;
//# sourceMappingURL=casual-time-ago.js.map