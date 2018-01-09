export class IntegerValueConverter {
    toView(n) {
        return n != null ? n.toString() : '';
    }
    fromView(s) {
        return s != null ? parseInt(s) : null;
    }
}
