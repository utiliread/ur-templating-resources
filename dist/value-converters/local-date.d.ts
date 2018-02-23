/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare type Kind = 'short' | 'med';
export declare class LocalDateValueConverter {
    toView(value: DateTime, kind?: Kind): string;
}
