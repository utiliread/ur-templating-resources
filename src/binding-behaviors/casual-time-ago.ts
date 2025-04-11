import { Binding, Scope } from "aurelia-framework";

import { DateTime } from "luxon";
import { casualTimeAgo } from "ur-humanize";

export class CasualTimeAgoBindingBehavior {
    bind(binding: CustomBinding, scope: Scope, bindingContext: any) {
        const base = bindingContext as DateTime;
        if (base && !base.isValid) {
            return;
        }

        // Store the original updateTarget function
        binding.originalUpdate = binding.updateTarget;

        // Replace with custom logic
        binding.updateTarget = (value?: DateTime) => {
            if (!value || !value.isValid) {
                return;
            }

            // Perform custom operations here
            const modifiedValue = casualTimeAgo(value, base);

            // Call the original update with the modified value
            binding.originalUpdate(modifiedValue);

            const deltaSeconds = Math.abs(
                base
                    ? value.diff(base).as("seconds")
                    : value.diffNow().as("seconds"),
            );

            const timeout =
                deltaSeconds < 30
                    ? 5_000
                    : deltaSeconds < 120
                      ? 10_000
                      : deltaSeconds < 3600
                        ? 20_000
                        : 60_000;

            binding.timerHandle = window.setInterval(() => {
                const modifiedValue = casualTimeAgo(value, base);
                if (!binding.originalUpdate) {
                    return;
                }
                binding.originalUpdate(modifiedValue);
            }, timeout);
        };
    }

    unbind(binding: CustomBinding, scope: Scope) {
        if (binding.timerHandle) {
            clearInterval(binding.timerHandle);
            delete binding.timerHandle;
        }
        // Restore the original updateTarget function
        binding.updateTarget = binding.originalUpdate;
        delete binding.originalUpdate;
    }
}

interface CustomBinding extends Binding {
    timerHandle?: number;
    originalUpdate?: (value: any) => void;
}
