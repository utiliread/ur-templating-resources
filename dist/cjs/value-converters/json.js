"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonValueConverter {
    toView(value) {
        return JSON.stringify(value);
    }
    fromView(value) {
        return JSON.parse(value);
    }
}
exports.JsonValueConverter = JsonValueConverter;
//# sourceMappingURL=json.js.map