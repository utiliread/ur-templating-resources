export class HexValueConverter {
    toView(value: number | ArrayBuffer, padding?: number) {
        if (value instanceof ArrayBuffer) {
            return Array.from(new Uint8Array(value)).map(byte => ('0' + byte.toString(16)).slice(-2)).join('');
        }
        
        let hex = value.toString(16);

        if (padding) {
            while (hex.length < padding) {
                hex = '0' + hex;
            }
        }

        return hex;
    }
}