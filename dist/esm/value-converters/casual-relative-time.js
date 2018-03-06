import { casualRelativeTime } from 'ur-humanize';
var CasualRelativeTimeValueConverter = /** @class */ (function () {
    function CasualRelativeTimeValueConverter() {
    }
    CasualRelativeTimeValueConverter.prototype.toView = function (value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return casualRelativeTime(value, base);
        }
    };
    return CasualRelativeTimeValueConverter;
}());
export { CasualRelativeTimeValueConverter };
//# sourceMappingURL=casual-relative-time.js.map