export class JsonValueConverter {
    toView(value: any) {
        return JSON.stringify(value);
    }

    fromView(value: string) {
        return JSON.parse(value);
    }
}