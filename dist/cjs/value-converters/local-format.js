"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalFormatValueConverter {
    toView(value, format) {
        if (value && value.isValid) {
            return value.toLocal().toFormat(format);
        }
    }
}
exports.LocalFormatValueConverter = LocalFormatValueConverter;
//# sourceMappingURL=local-format.js.map