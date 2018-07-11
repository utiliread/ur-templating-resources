import 'select2';
import { TaskQueue } from 'aurelia-framework';
import { Select2Item } from './select2-item';
export declare class Select2SelectCustomElement {
    private element;
    private taskQueue;
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
    selectElement: HTMLSelectElement;
    constructor(element: Element, taskQueue: TaskQueue);
    bind(bindingContext: any): void;
    attached(): void;
    detached(): void;
    selectedChanged(): void;
    disabledChanged(): void;
}
