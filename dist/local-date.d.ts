/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare type Kind = 'short' | 'med';
export declare class LocalDateValueConverter {
    toView(date: DateTime, kind?: Kind): string;
}
