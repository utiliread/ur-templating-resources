import { DateTime } from 'luxon';
export declare type Resolution = 'second' | 'minute' | 'hour';
export declare class DatetimeLocalValueConverter {
    toView(value: DateTime, resolution?: Resolution): string;
    fromView(value: string, resolution?: Resolution): DateTime;
}
