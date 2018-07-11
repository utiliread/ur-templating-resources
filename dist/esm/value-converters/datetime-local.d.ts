import { DateTime } from 'luxon';
export declare type Resolution = 'second' | 'minute' | 'hour';
export declare class DatetimeLocalValueConverter {
    toView(value: any, resolution: Resolution): any;
    fromView(value: string, resolution: Resolution): DateTime;
}
