import { autoinject, bindable, computedFrom } from 'aurelia-framework';

import { ButtonSelectCustomElement } from './button-select';

@autoinject()
export class ButtonOptionCustomElement {
    @bindable()
    value: any;

    @bindable()
    btnClass: string;

    @computedFrom('value', 'parent.value')
    get isActive() {
        return this.value === this.parent.value;
    }

    constructor(private parent: ButtonSelectCustomElement) {
    }

    select() {
        this.parent.value = this.value;
    }
}