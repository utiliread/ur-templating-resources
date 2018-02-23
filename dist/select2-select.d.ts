import 'select2';
import { Select2Item } from './select2-item';
export declare class Select2SelectCustomElement {
    private bindingContext;
    name: string;
    selected: string[];
    items: Select2Item[];
    minimumInputLength: string | number;
    placeholder: string;
    query: (q: string) => Promise<{
        id: string;
        text: string;
    }[] | {
        id: string;
        text: string;
    }[]>;
    element: HTMLSelectElement;
    bind(bindingContext: any): void;
    attached(): void;
    detached(): void;
    selectedChanged(): void;
}
