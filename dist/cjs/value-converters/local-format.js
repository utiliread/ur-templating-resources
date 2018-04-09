"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalFormatValueConverter = /** @class */ (function () {
    function LocalFormatValueConverter() {
    }
    LocalFormatValueConverter.prototype.toView = function (value, format) {
        if (value && value.isValid) {
            if (typeof format === "string") {
                return value.toLocal().toFormat(format);
            }
            else {
                return value.toLocal().toLocaleString(format);
            }
        }
    };
    return LocalFormatValueConverter;
}());
exports.LocalFormatValueConverter = LocalFormatValueConverter;
//# sourceMappingURL=local-format.js.map