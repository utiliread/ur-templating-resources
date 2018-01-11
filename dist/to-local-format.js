export class ToLocalFormatValueConverter {
    toView(moment, format) {
        return moment.toLocal().toFormat(format);
    }
}
