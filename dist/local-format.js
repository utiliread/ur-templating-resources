export class LocalFormatValueConverter {
    toView(value, format) {
        if (value && value.isValid) {
            return value.toLocal().toFormat(format);
        }
    }
}
