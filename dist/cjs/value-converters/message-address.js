"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex = new RegExp(/([^<]*)(<(.*)>)?/);
class MessageAddressValueConverter {
    toView(addressOrAddresses, kind) {
        if (kind === undefined) {
            kind = false;
        }
        if (Array.isArray(addressOrAddresses)) {
            let truncatedCount = 0;
            if (kind !== true && kind !== false) {
                let max = kind;
                truncatedCount = addressOrAddresses.length - max;
                if (truncatedCount > 0) {
                    addressOrAddresses = addressOrAddresses.slice(0, max);
                }
            }
            let formatted = addressOrAddresses.map(x => this.format(x, kind)).join(';');
            if (truncatedCount > 0) {
                formatted += ` (+${truncatedCount})`;
            }
            return formatted;
        }
        else {
            return this.format(addressOrAddresses, kind);
        }
    }
    fromView(addresses) {
        return addresses.split(';').map(this.unformat);
    }
    format(address, kind) {
        if (kind === true) {
            return address;
        }
        else {
            let match = regex.exec(address);
            return match[1].trim();
        }
    }
    unformat(address) {
        return address;
    }
}
exports.MessageAddressValueConverter = MessageAddressValueConverter;
//# sourceMappingURL=message-address.js.map