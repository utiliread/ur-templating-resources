/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class ToLocalFormatValueConverter {
    toView(moment: DateTime, format: string): string;
}
