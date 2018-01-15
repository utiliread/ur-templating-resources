/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class TimeAgoValueConverter {
    toView(value: DateTime, base?: DateTime): string;
}
