export class LowerValueConverter {
  toView(value: string) {
    if (value) {
      return value.toLocaleLowerCase();
    }
  }
}
