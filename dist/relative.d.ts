/// <reference types="luxon" />
import { DateTime } from "luxon";
export declare class RelativeValueConverter {
    toView(date: DateTime, base?: DateTime): string;
}
