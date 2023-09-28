import { PropsTokensTextCore } from "./type.text";

export interface PropsStyleTextInputCore {
  width: string | number;
  height: string | number;
  backgroundColor: string;
  text: {
    type: PropsTokensTextCore;
    textColor: string;
    textColorDisable: string;
    errorTextColor: string;
    placeholderColor: string;
  };
  label: {
    type: PropsTokensTextCore;
    textColor: string;
    errorTextColor: string;
    padding: number;
  };
  description: {
    type: PropsTokensTextCore;
    textColor: string;
    errorTextColor: string;
    spacing: number;
  };
  shape: {
    backgroundColor: string;
    borderRadius: number;
    borderWidth: number;
    padding: number;
  };
  border: {
    borderWidth: number;
    borderColor: string;
    borderColorDefault: string;
    borderColorDisable: string;
    borderColorFocused: string;
    borderColorActivated: string;
    errorBorderColor: string;
  };
  supportText: {
    type: PropsTokensTextCore;
    textColor: string;
    spacing: number;
  };
  icon: {
    name: any;
    errorColor: string;
  };
}
