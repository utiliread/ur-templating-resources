"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regex = new RegExp(/([^<]*)(<(.*)>)?/);
var MessageAddressValueConverter = /** @class */ (function () {
    function MessageAddressValueConverter() {
    }
    MessageAddressValueConverter.prototype.toView = function (addressOrAddresses, kind) {
        var _this = this;
        if (kind === undefined) {
            kind = false;
        }
        if (Array.isArray(addressOrAddresses)) {
            var truncatedCount = 0;
            if (kind !== true && kind !== false) {
                var max = kind;
                truncatedCount = addressOrAddresses.length - max;
                if (truncatedCount > 0) {
                    addressOrAddresses = addressOrAddresses.slice(0, max);
                }
            }
            var formatted = addressOrAddresses.map(function (x) { return _this.format(x, kind); }).join(';');
            if (truncatedCount > 0) {
                formatted += " (+" + truncatedCount + ")";
            }
            return formatted;
        }
        else {
            return this.format(addressOrAddresses, kind);
        }
    };
    MessageAddressValueConverter.prototype.fromView = function (addresses) {
        return addresses.split(';').map(this.unformat);
    };
    MessageAddressValueConverter.prototype.format = function (address, kind) {
        if (kind === true) {
            return address;
        }
        else {
            var match = regex.exec(address);
            return match[1].trim();
        }
    };
    MessageAddressValueConverter.prototype.unformat = function (address) {
        return address;
    };
    return MessageAddressValueConverter;
}());
exports.MessageAddressValueConverter = MessageAddressValueConverter;
//# sourceMappingURL=message-address.js.map