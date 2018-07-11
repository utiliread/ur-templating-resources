import { DateTime } from 'luxon';
export declare class LocalFormatValueConverter {
    toView(value: DateTime, format: string | Intl.DateTimeFormatOptions): string;
}
