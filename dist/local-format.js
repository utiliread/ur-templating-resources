export class LocalFormatValueConverter {
    toView(dateTime, format) {
        return dateTime.toLocal().toFormat(format);
    }
}
