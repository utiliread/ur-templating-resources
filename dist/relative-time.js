import { relativeTime } from 'ur-humanize';
export class RelativeTimeValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return relativeTime(value, base);
        }
    }
}
