import { exactTime } from 'ur-humanize';
var ExactTimeValueConverter = /** @class */ (function () {
    function ExactTimeValueConverter() {
    }
    ExactTimeValueConverter.prototype.toView = function (value, includeSeconds) {
        if (value && value.isValid) {
            return exactTime(value, includeSeconds);
        }
    };
    return ExactTimeValueConverter;
}());
export { ExactTimeValueConverter };
//# sourceMappingURL=exact-time.js.map