/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class LocalFormatValueConverter {
    toView(dateTime: DateTime, format: string): string;
}
