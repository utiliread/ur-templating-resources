import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./datetime-local'),
        PLATFORM.moduleName('./duration'),
        PLATFORM.moduleName('./hex'),
        PLATFORM.moduleName('./humanize'),
        PLATFORM.moduleName('./integer'),
        PLATFORM.moduleName('./inverse'),
        PLATFORM.moduleName('./json'),
        PLATFORM.moduleName('./lower'),
        PLATFORM.moduleName('./message-address'),
        PLATFORM.moduleName('./to-local-format'),
        PLATFORM.moduleName('./upper')
    ]);
}