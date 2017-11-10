import { duration, isDuration } from 'moment';
var DurationValueConverter = /** @class */ (function () {
    function DurationValueConverter() {
    }
    DurationValueConverter.prototype.toView = function (value) {
        if (isDuration(value)) {
            return value.toISOString();
        }
    };
    DurationValueConverter.prototype.fromView = function (value) {
        return duration(value);
    };
    return DurationValueConverter;
}());
export { DurationValueConverter };
