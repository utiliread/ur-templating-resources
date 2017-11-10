import { Duration } from 'moment';
export declare class DurationValueConverter {
    toView(value: any): string;
    fromView(value: string): Duration;
}
