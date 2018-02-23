const regex = new RegExp(/([^<]*)(<(.*)>)?/);

// true: full
// false or undefined: compact
// number: compact with max
export type Kind = true | false | number;

export class MessageAddressValueConverter {
    toView(addressOrAddresses: string | string[], kind?: Kind) {
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

    fromView(addresses: string) {
        return addresses.split(';').map(this.unformat);
    }

    private format(address: string, kind: Kind) {
        if (kind === true) {
            return address;
        }
        else {
            let match = regex.exec(address);
            return match[1].trim();
        }
    }

    private unformat(address: string) {
        return address;
    }
}