import { Humanize } from 'ur-humanize';
export class RelativeValueConverter {
    toView(date, base) {
        return Humanize.relative(date, base);
    }
}
