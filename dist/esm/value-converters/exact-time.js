import { exactTime } from 'ur-humanize';
export class ExactTimeValueConverter {
    toView(value) {
        if (value && value.isValid) {
            return exactTime(value);
        }
    }
}
//# sourceMappingURL=exact-time.js.map