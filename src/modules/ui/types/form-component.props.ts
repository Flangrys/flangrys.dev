import type {HTMLInputTypeAttribute, InputEventHandler, ReactNode, Ref} from "react";

export interface InputProps<T extends HTMLElement> {
    id: string;
    label: string;

    type?: HTMLInputTypeAttribute;

    ref?: Ref<T | null>;
    onInput?: InputEventHandler<T>;
    onInvalid?: InputEventHandler<T>;

    children?: ReactNode;
}

export interface TextInputProps extends InputProps<HTMLInputElement> {
    placeholder: string;
}

export interface SelectInputProps extends InputProps<HTMLSelectElement> {
    placeholder: string;

    options: string[];
}
