export class NumberValueConverter {
    toView(value: number) {
        return value;
    }

    fromView(value: string, emptyValue?: any) {
        if (value === "" && arguments.length === 2) {
            return emptyValue;
        }
        return Number(value);
    }
}