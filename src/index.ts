import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./datetime-local'),
        PLATFORM.moduleName('./hex'),
        PLATFORM.moduleName('./inverse'),
        PLATFORM.moduleName('./json'),
        PLATFORM.moduleName('./local-date-time'),
        PLATFORM.moduleName('./local-date'),
        PLATFORM.moduleName('./local-format'),
        PLATFORM.moduleName('./local-time'),
        PLATFORM.moduleName('./lower'),
        PLATFORM.moduleName('./message-address'),
        PLATFORM.moduleName('./relative-time'),
        PLATFORM.moduleName('./relevant-time'),
        PLATFORM.moduleName('./time-ago'),
        PLATFORM.moduleName('./upper')
    ]);
}