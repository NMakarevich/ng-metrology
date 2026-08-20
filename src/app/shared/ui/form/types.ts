import { FieldTree } from '@angular/forms/signals';

export interface CommonFieldInterface {
  id: string;
  label?: string;
  class?: string;
  skip?: boolean;
}

export interface InputFieldInterface extends CommonFieldInterface {
  tag: 'input';
  type: string;
  placeholder?: string;
  formField: FieldTree<string>;
  icon?: {
    name: string;
    isButton: boolean;
    position: 'prefix' | 'suffix';
    callback?: () => void;
  };
}

export interface SelectFieldInterface extends CommonFieldInterface {
  tag: 'select';
  options: SelectOption[];
  formField: FieldTree<string>;
  selectedOption?: SelectOption;
}

interface SelectOption {
  value: string | number;
  option: string;
}

export interface TextAreaFieldInterface extends CommonFieldInterface {
  tag: 'textarea';
  value: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  formField: FieldTree<string>;
}

export type FieldType = InputFieldInterface | SelectFieldInterface | TextAreaFieldInterface;

export type FormFields<T> = {
  [K in keyof T]: T[K] extends object ? FormFields<T[K]> : FieldType;
};
