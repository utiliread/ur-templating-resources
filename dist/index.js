import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./casual-relative-time'),
        PLATFORM.moduleName('./casual-time-ago'),
        PLATFORM.moduleName('./casual-time'),
        PLATFORM.moduleName('./datetime-local'),
        PLATFORM.moduleName('./exact-time'),
        PLATFORM.moduleName('./hex'),
        PLATFORM.moduleName('./inverse'),
        PLATFORM.moduleName('./json'),
        PLATFORM.moduleName('./local-date-time'),
        PLATFORM.moduleName('./local-date'),
        PLATFORM.moduleName('./local-format'),
        PLATFORM.moduleName('./local-time'),
        PLATFORM.moduleName('./lower'),
        PLATFORM.moduleName('./message-address'),
        PLATFORM.moduleName('./upper')
    ]);
}
