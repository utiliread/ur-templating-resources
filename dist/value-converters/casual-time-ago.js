import { casualTimeAgo } from 'ur-humanize';
export class CasualTimeAgoValueConverter {
    toView(value, base) {
        if (value && value.isValid && (!base || base.isValid)) {
            return casualTimeAgo(value, base);
        }
    }
}
