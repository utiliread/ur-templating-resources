export class LowerValueConverter {
    toView(value) {
        if (value) {
            return value.toLocaleLowerCase();
        }
    }
}
