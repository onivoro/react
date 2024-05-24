import { ILookup } from './lookup.interface';

export interface IFieldOption {
  label: string,
  options?: ILookup<string, string>[],
  type: 'text' | 'number' | 'select' | 'checkbox' | 'date' | 'password',
  disabled?: boolean,
  validators?: {
    min?: number,
    minLength?: number,
    max?: number,
    maxLength?: number,
    pattern?: RegExp,
    required?: boolean,
  },
  multiple?: boolean;
}
