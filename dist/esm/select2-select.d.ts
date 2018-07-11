import 'select2';
import { Select2Item } from './select2-item';
export declare class Select2SelectCustomElement {
    private element;
    private bindingContext;
    name?: string;
    selected: string[];
    items: Select2Item[];
    minimumInputLength: string | number;
    placeholder: string;
    disabled: boolean;
    query?: (q: string) => Promise<{
        id: string;
        text: string;
    }[] | {
        id: string;
        text: string;
    }[]>;
    select2element: HTMLSelectElement;
    constructor(element: Element);
    bind(bindingContext: any): void;
    attached(): void;
    detached(): void;
    selectedChanged(): void;
    disabledChanged(): void;
}
