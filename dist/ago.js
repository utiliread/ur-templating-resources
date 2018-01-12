import { Humanize } from 'ur-humanize';
export class AgoValueConverter {
    toView(date, base) {
        return Humanize.ago(date, base);
    }
}
