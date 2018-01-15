import { relaxedTime } from 'ur-humanize';
export class RelaxedTimeValueConverter {
    toView(value) {
        if (value && value.isValid) {
            return relaxedTime(value);
        }
    }
}
