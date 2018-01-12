/// <reference types="luxon" />
import { DateTime } from 'luxon';
export declare class TimeAgoValueConverter {
    toView(date: DateTime, base?: DateTime): string;
}
