import { DateTime } from 'luxon';
export declare type Kind = 'short' | 'med';
export declare class LocalDateTimeValueConverter {
    toView(value: DateTime, kind?: Kind): string;
}
