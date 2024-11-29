import { IFieldOption } from "./field-option.interface";
import { TKeysOf } from "@onivoro/isomorphic-common";

export type TFormFields<TFormData> = TKeysOf<TFormData, IFieldOption>;