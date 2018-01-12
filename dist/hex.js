export class HexValueConverter {
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
