export class UpperValueConverter {
    toView(value) {
        if (value) {
            return value.toLocaleUpperCase();
        }
    }
}
