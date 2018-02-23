import { casualRelativeTime } from 'ur-humanize';
export class CasualRelativeTimeValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return casualRelativeTime(value, base);
        }
    }
}
