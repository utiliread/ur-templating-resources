import { exactTime } from 'ur-humanize';
var ExactTimeValueConverter = /** @class */ (function () {
    function ExactTimeValueConverter() {
    }
    ExactTimeValueConverter.prototype.toView = function (value) {
        if (value && value.isValid) {
            return exactTime(value);
        }
    };
    return ExactTimeValueConverter;
}());
export { ExactTimeValueConverter };
//# sourceMappingURL=exact-time.js.map