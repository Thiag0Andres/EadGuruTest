import { PropsTokenColorsCore } from "./type.colors";
import { PropsTokensTextCore } from "./type.text";

export interface PropsButtonCore {
  primaryLarge: PropsStylesButtonCore;
  primaryMedium: PropsStylesButtonCore;
  primarySmall: PropsStylesButtonCore;
  secundaryLarge: PropsStylesButtonCore;
  secundaryMedium: PropsStylesButtonCore;
  secundarySmall: PropsStylesButtonCore;
  secundaryQuarck: PropsStylesButtonCore;
  ghostLarge: PropsStylesButtonCore;
  ghostMedium: PropsStylesButtonCore;
  ghostSmall: PropsStylesButtonCore;
  iconLarge: PropsStylesButtonCore;
}

export interface PropsStylesButtonCore {
  width?: number | string;
  height?: number | string;
  color?: PropsTokenColorsCore;
  colorDisabled?: PropsTokenColorsCore;
  borderColor?: PropsTokenColorsCore;
  borderColorDisabled?: PropsTokenColorsCore;
  borderWidth?: number;
  borderRadius: number;
  spacing?: number | string;
  text: {
    type: PropsTokensTextCore;
    textColor?: PropsTokenColorsCore;
    textColorDisabled?: PropsTokenColorsCore;
    underline?: string;
  };
  icon?: {
    size: any;
    color: PropsTokenColorsCore;
    colorDisabled: PropsTokenColorsCore;
  };
}

export type PropsTokensButtonCore =
  | "primaryLarge"
  | "primaryMedium"
  | "primarySmall"
  | "secundaryLarge"
  | "secundaryMedium"
  | "secundarySmall"
  | "secundaryQuarck"
  | "ghostLarge"
  | "ghostMedium"
  | "ghostSmall"
  | "iconLarge"
  | "quarckIcon";
