/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare type Kind = 'short' | 'med';
export declare class LocalDateTimeValueConverter {
    toView(dateTime: DateTime, kind?: Kind): string;
}
