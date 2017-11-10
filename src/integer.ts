export class IntegerValueConverter {
    toView(n: number) {
        return n != null ? n.toString() : '';
    }

    fromView(s: string) {
        return s != null ? parseInt(s) : null;
    }
}