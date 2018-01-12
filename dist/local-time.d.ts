/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class LocalTimeValueConverter {
    toView(time: DateTime, withSeconds?: boolean): string;
}
