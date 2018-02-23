import { casualRelativeTime } from 'ur-humanize';
export class CasualRelativeTimeValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return casualRelativeTime(value, base);
        }
    }
}
//# sourceMappingURL=casual-relative-time.js.map