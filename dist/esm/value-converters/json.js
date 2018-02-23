export class JsonValueConverter {
    toView(value) {
        return JSON.stringify(value);
    }
    fromView(value) {
        return JSON.parse(value);
    }
}
//# sourceMappingURL=json.js.map