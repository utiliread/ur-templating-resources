import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./ago'),
        PLATFORM.moduleName('./datetime-local'),
        PLATFORM.moduleName('./hex'),
        PLATFORM.moduleName('./humanize'),
        PLATFORM.moduleName('./inverse'),
        PLATFORM.moduleName('./json'),
        PLATFORM.moduleName('./lower'),
        PLATFORM.moduleName('./message-address'),
        PLATFORM.moduleName('./local-date'),
        PLATFORM.moduleName('./local-date-time'),
        PLATFORM.moduleName('./local-format'),
        PLATFORM.moduleName('./local-time'),
        PLATFORM.moduleName('./relative'),
        PLATFORM.moduleName('./upper')
    ]);
}