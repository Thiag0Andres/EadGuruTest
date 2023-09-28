import { RefObject } from "react";
import { ReturnKeyTypeOptions, TextInput } from "react-native";

import {
  PropsSpacesHorizontal,
  PropsSpacesVertical,
} from "../../../../styles/Models";
import { PropsColors } from "../../../../styles/Models/type.colors";
import { PropsStyleTextInputCore } from "../../../../styles/Models/type.textinput";

import { PropsItem } from "../../../molecules/ResultList/Models";

export interface DefaultPropsInputText {
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
}

export type KeyboardType =
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "number-pad"
  | "decimal-pad";
export type KeyboardTypeIOS =
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "url"
  | "name-phone-pad"
  | "twitter"
  | "web-search";
export type KeyboardTypeAndroid = "visible-password";
export type KeyboardTypeOptions =
  | KeyboardType
  | KeyboardTypeAndroid
  | KeyboardTypeIOS;

type TypesInput =
  | "default"
  | "small"
  | "search"
  | "validatePassword"
  | "searchLigth"
  | "searchResultAction"
  | "searchResultList";

export interface InputTextProps extends DefaultPropsInputText {
  type?: TypesInput;
  placeholder?: string;
  editable?: boolean;
  error?: boolean;
  textError?: string;
  description?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
  isValid?: (value: boolean) => void;
  onPressSearch?: (value?: string) => void;
  onPressList?: (item: PropsItem) => void;
  itemsSearch?: Array<PropsItem>;
  value?: string;
  uppercase?: boolean;
  maxLength?: number;
  textInputColor?: string;
  placeholderTextColor?: string;
  componentRef?: RefObject<TextInput>;
  bgColor?: string;
  onPressIn?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  testID?: string;
  isLoading?: boolean;
}

export interface InputTextViewProps
  extends DefaultPropsInputText,
    InputTextProps {
  secureText: boolean;
  setSecureText: (secureText: boolean) => void;
  visibleValidatePassword: boolean;
  setVisibleValidatePassword: (visibleValidatePassword: boolean) => void;
  isSearch: boolean;
  textColor: () => string;
}

export interface propsTextInput {
  type: PropsStyleTextInputCore;
  error?: boolean;
  small?: boolean;
  color: PropsColors;
  textInputColor?: string;
  input?: TypesInput;
}

export interface propsContent {
  type: PropsStyleTextInputCore;
  error?: boolean;
  focus?: boolean;
  editable?: boolean;
  active?: string;
  color: PropsColors;
  bgColor?: string;
}
