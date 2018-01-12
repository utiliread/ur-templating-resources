/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class RelativeTimeValueConverter {
    toView(date: DateTime, base?: DateTime): string;
}
