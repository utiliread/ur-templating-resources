import { Moment } from 'moment';
export declare type Resolution = 'second' | 'minute' | 'hour';
export declare class DatetimeLocalValueConverter {
    toView(value: any, resolution: Resolution): string;
    fromView(value: string, resolution: Resolution): Moment;
}
