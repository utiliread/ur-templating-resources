"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HexValueConverter {
    toView(value, padding) {
        let hex = value.toString(16);
        if (padding) {
            while (hex.length < padding) {
                hex = '0' + hex;
            }
        }
        return hex;
    }
}
exports.HexValueConverter = HexValueConverter;
//# sourceMappingURL=hex.js.map