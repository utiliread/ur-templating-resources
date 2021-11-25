"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerValueConverter = void 0;
var LowerValueConverter = /** @class */ (function () {
    function LowerValueConverter() {
    }
    LowerValueConverter.prototype.toView = function (value) {
        if (value) {
            return value.toLocaleLowerCase();
        }
    };
    return LowerValueConverter;
}());
exports.LowerValueConverter = LowerValueConverter;
//# sourceMappingURL=lower.js.map