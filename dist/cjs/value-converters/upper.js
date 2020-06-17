"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperValueConverter = void 0;
var UpperValueConverter = /** @class */ (function () {
    function UpperValueConverter() {
    }
    UpperValueConverter.prototype.toView = function (value) {
        if (value) {
            return value.toLocaleUpperCase();
        }
    };
    return UpperValueConverter;
}());
exports.UpperValueConverter = UpperValueConverter;
//# sourceMappingURL=upper.js.map