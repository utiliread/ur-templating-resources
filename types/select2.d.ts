import { Select2Plugin, DataFormat } from "select2";

declare module "select2" {
    export interface Select2Plugin {
        (method: "data", value: DataFormat[], triggerChange: boolean): void;
    }
}