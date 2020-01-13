export class NumberValueConverter {
    toView(value: number) {
        return value;
    }

    fromView(value: string, emptyValue: any = 0) {
        if (value === "") {
            return emptyValue;
        }
        return Number(value);
    }
}