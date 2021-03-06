"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexValueConverter = void 0;
var HexValueConverter = /** @class */ (function () {
    function HexValueConverter() {
    }
    HexValueConverter.prototype.toView = function (value, padding) {
        if (value instanceof ArrayBuffer) {
            return Array.from(new Uint8Array(value)).map(function (byte) { return ('0' + byte.toString(16)).slice(-2); }).join('');
        }
        var hex = value.toString(16);
        if (padding) {
            while (hex.length < padding) {
                hex = '0' + hex;
            }
        }
        return hex;
    };
    return HexValueConverter;
}());
exports.HexValueConverter = HexValueConverter;
//# sourceMappingURL=hex.js.map