/// <reference types="luxon" />
import { Duration } from 'luxon';
export declare class DurationValueConverter {
    toView(value: any): string;
    fromView(value: string): Duration;
}
