export class NumberValueConverter {
    toView(value: number) {
        return value;
    }

    fromView(value: string) {
        return Number(value);
    }
}