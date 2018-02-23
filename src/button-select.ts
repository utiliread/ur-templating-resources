import { bindable, bindingMode } from 'aurelia-framework';

import { ButtonOptionCustomElement } from './button-option';

export class ButtonSelectCustomElement {
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value: any;
}