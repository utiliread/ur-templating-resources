"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/casual-relative-time'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/casual-time-ago'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/casual-time'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/datetime-local'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/exact-time'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/hex'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/inverse'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/json'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/local-date-time'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/local-date'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/local-format'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/local-time'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/lower'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/number'),
        aurelia_framework_1.PLATFORM.moduleName('./value-converters/upper'),
        aurelia_framework_1.PLATFORM.moduleName('./button-option'),
        aurelia_framework_1.PLATFORM.moduleName('./button-select'),
        aurelia_framework_1.PLATFORM.moduleName('./select2-select')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map