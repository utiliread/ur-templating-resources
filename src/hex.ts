export class HexValueConverter {
    toView(value: number, padding: number) {
        let hex = value.toString(16);

        if (padding != null) {
            while (hex.length < padding) {
                hex = '0' + hex;
            }
        }

        return hex;
    }
}