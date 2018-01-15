/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class RelativeTimeValueConverter {
    toView(value: DateTime, base?: DateTime): string;
}
