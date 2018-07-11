export declare type Kind = true | false | number;
export declare class MessageAddressValueConverter {
    toView(addressOrAddresses: string | string[], kind?: Kind): string;
    fromView(addresses: string): string[];
    private format;
    private unformat;
}
