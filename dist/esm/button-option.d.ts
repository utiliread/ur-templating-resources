import { ButtonSelectCustomElement } from './button-select';
export declare class ButtonOptionCustomElement {
    private parent;
    value: any;
    btnClass?: string;
    get isActive(): boolean;
    constructor(parent: ButtonSelectCustomElement);
    select(): void;
}
