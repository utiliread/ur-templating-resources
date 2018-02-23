import { casualTime } from 'ur-humanize';
export class CasualTimeValueConverter {
    toView(value) {
        if (value && value.isValid) {
            return casualTime(value);
        }
    }
}
//# sourceMappingURL=casual-time.js.map