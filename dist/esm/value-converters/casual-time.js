import { casualTime } from 'ur-humanize';
var CasualTimeValueConverter = /** @class */ (function () {
    function CasualTimeValueConverter() {
    }
    CasualTimeValueConverter.prototype.toView = function (value) {
        if (value && value.isValid) {
            return casualTime(value);
        }
    };
    return CasualTimeValueConverter;
}());
export { CasualTimeValueConverter };
//# sourceMappingURL=casual-time.js.map