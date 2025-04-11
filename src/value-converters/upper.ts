export class UpperValueConverter {
  toView(value: string) {
    if (value) {
      return value.toLocaleUpperCase();
    }
  }
}
