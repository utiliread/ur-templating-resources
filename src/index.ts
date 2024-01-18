import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

import { DataFormat } from "select2";

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./value-converters/casual-relative-time'),
        PLATFORM.moduleName('./value-converters/casual-time-ago'),
        PLATFORM.moduleName('./value-converters/casual-time'),
        PLATFORM.moduleName('./value-converters/datetime-local'),
        PLATFORM.moduleName('./value-converters/exact-time'),
        PLATFORM.moduleName('./value-converters/hex'),
        PLATFORM.moduleName('./value-converters/inverse'),
        PLATFORM.moduleName('./value-converters/json'),
        PLATFORM.moduleName('./value-converters/local-date-time'),
        PLATFORM.moduleName('./value-converters/local-date'),
        PLATFORM.moduleName('./value-converters/local-format'),
        PLATFORM.moduleName('./value-converters/local-time'),
        PLATFORM.moduleName('./value-converters/lower'),
        PLATFORM.moduleName('./value-converters/number'),
        PLATFORM.moduleName('./value-converters/upper'),
        PLATFORM.moduleName('./button-option'),
        PLATFORM.moduleName('./button-select'),
        PLATFORM.moduleName('./select2-select')
    ]);
}

export {
    DataFormat as Select2Item
};