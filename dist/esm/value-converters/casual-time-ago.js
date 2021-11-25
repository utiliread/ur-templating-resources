import { casualTimeAgo } from 'ur-humanize';
var CasualTimeAgoValueConverter = /** @class */ (function () {
    function CasualTimeAgoValueConverter() {
    }
    CasualTimeAgoValueConverter.prototype.toView = function (value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return casualTimeAgo(value, base);
        }
    };
    return CasualTimeAgoValueConverter;
}());
export { CasualTimeAgoValueConverter };
//# sourceMappingURL=casual-time-ago.js.map