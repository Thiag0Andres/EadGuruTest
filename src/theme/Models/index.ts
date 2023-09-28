import { PropsBorderWidthCore } from "./type.borderWidth";
import { PropsColorsCore } from "./type.colors";
import {
  PropsIconsNameCore,
  PropsSizeIconCore,
  PropsStyleIconCore,
} from "./type.icon";
import { PropsShadowCore } from "./type.shadow";
import { PropsTextCore, PropsTextDefault } from "./type.text";

export interface PropsThemeDefault {
  colors: PropsColorsCore;
  icons: PropsIconsNameCore;
  styleText?: PropsTextDefault;
  fontSize?: FontSizeProps;
  fontWeight?: FontWeightsProps;
  borderWidth?: PropsBorderWidthCore;
  opacityLevel?: PropsOpacityLevel;
  lineHeight?: PropsLineHight;
  styleButton?: PropsStyleButton;
  styleTextInput?: PropsStyleTextInput;
  styleBackground?: PropsStyleBackground;
  spaces?: PropsSpaces;
  shadow?: PropsShadowCore;
  styleIcon?: PropsStyleIconCore;
}

interface PropsSpaces {
  margins: {
    flat: {
      quark: string;
      nano: string;
      xxxxs: string;
      xxxs: string;
      xxs: string;
      xs: string;
      tiny: string;
      smaller: string;
      small: string;
      middle: string;
      meddium: string;
      large: string;
      larger: string;
      xl: string;
      xxl: string;
      xxxl: string;
      huge: string;
    };
    standing: {
      quark: string;
      nano: string;
      xs: string;
      smaller: string;
      small: string;
      middle: string;
      medium: string;
      large: string;
      larger: string;
    };
  };
  padding: {
    inner: {
      small: string;
      middle: string;
      medium: string;
      large: string;
      larger: string;
      xl: string;
      xxxl: string;
      great: string;
    };
    squish: {
      xxxs: string;
      xxs: string;
      xs: string;
      quarck: string;
      smaller: string;
      small: string;
      xxxss: string;
      short: string;
      middle: string;
      minor: string;
      medium: string;
      large: string;
    };
    stretch: {
      small: string;
      middle: string;
      medium: string;
      large: string;
      larger: string;
      half: string;
    };
  };
}

interface PropsStyleBackground {
  default: {
    bgColor: string;
  };
  secundary: {
    bgColor: string;
  };
  scrim: {
    bgColor: string;
    opacity: string;
  };
  top: {
    bgColor: string;
  };
}

interface PropsStyleTextInput {
  default: {
    width: number | string;
    height: number | string;
    backgroundColor: string;
    text: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
    };
    label: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
      padding: number;
    };
    description: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
      spacing: string;
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
      type: PropsTextCore;
      textColor: string;
      spacing: string;
    };
    icon: {
      name: string;
      errorColor: string;
      passwordColor: string;
    };
  };
  small: {
    width: number | string;
    height: number | string;
    backgroundColor: string;
    text: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
    };
    label: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
      padding: number;
    };
    description: {
      type: PropsTextCore;
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
      type: PropsTextCore;
      textColor: string;
      spacing: number;
    };
    icon: {
      name: string;
      errorColor: string;
    };
  };
  search: {
    width: number | string;
    height: number | string;
    backgroundColor: string;
    borderRadius: number;
    text: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
    };
    label: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
      padding: number | string;
    };
    description: {
      type: PropsTextCore;
      textColor: string;
      errorTextColor: string;
      spacing: string;
    };
    shape: {
      backgroundColor: string;
      borderRadius: number;
      borderWidth: number;
      padding: number | string;
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
      type: PropsTextCore;
      textColor: string;
      spacing: string;
    };
    icon: {
      name: string;
      errorColor: string;
      passwordColor: string;
    };
  };
}

interface PropsStyleButton {
  buttonPrimaryLarge?: propsTypeButton;
  buttonPrimaryMedium?: propsTypeButton;
  buttonPrimarySmall?: propsTypeButton;
  buttonSecundaryLarge?: propsTypeButton;
  buttonSecundaryMedium?: propsTypeButton;
  buttonSecundarySmall?: propsTypeButton;
  buttonSecundaryTiny?: propsTypeButton;
  secundaryQuarck?: propsTypeButton;
  primaryLargeCherry?: propsTypeButton;
  secundaryLargeCherry?: propsTypeButton;
  ghostLarge?: propsTypeButton;
  ghostMedium?: propsTypeButton;
  ghostSmall?: propsTypeButton;
  quarckIcon?: propsTypeButton;
  blocked?: propsTypeButton;
  tiny?: propsTypeButton;
}

interface propsTypeButton {
  width?: number;
  height?: number;
  color?: string;
  colorDisabled?: string;
  borderColor?: string;
  borderColorDisabled?: string;
  bw?: PropsBorderWidth;
  borderRadius?: number;
  spacing?: string;
  text: {
    type: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
      letterSpacing?: number;
    };
    textColor: string;
    textColorDisabled: string;
  };
}

interface PropsLineHight {
  tight: number;
  fair: number;
  distant: number;
}

interface PropsOpacityLevel {
  small: number;
  none: number;
}

interface FontSizeProps {
  small: number;
  medium: number;
  large: number;
}

interface FontWeightsProps {
  normal: number;
  medium: number;
  bold: number;
}

export interface PopsTypeButton {
  [key: string]: {
    width: number | string;
    height: number;
    color: string;
    colorDisabled: string;
    borderColor?: string;
    borderColorDisabled?: string;
    bw?: PropsBorderWidth;
    borderRadius: number;
    spacing: string;
    text: {
      type: PropsTextCore;
      textColor: string;
      textColorDisabled: string;
    };
  };
}

export type PropsBorderWidth =
  | "small"
  | "smaller"
  | "medium"
  | "half"
  | "large"
  | "xxl"
  | "none";

export type PropsSpacesHorizontal =
  | "quark"
  | "nano"
  | "xxxxs"
  | "xxxs"
  | "xxs"
  | "xs"
  | "tiny"
  | "smaller"
  | "small"
  | "middle"
  | "meddium"
  | "large"
  | "larger"
  | "xl"
  | "xxl"
  | "xxxl"
  | "huge"
  | "none";

export type PropsSpacesVertical =
  | "quark"
  | "nano"
  | "xs"
  | "smaller"
  | "small"
  | "middle"
  | "medium"
  | "large"
  | "larger"
  | "half"
  | "none";

export type PropsPadding =
  | "none"
  | "innerSmall"
  | "innerMiddle"
  | "innerMedium"
  | "innerLarge"
  | "innerGreat"
  | "innerLarger"
  | "innerXl"
  | "innerXxxl"
  | "squishXxxss"
  | "squishXxxs"
  | "squishXxs"
  | "squishXs"
  | "squishQuarck"
  | "squishSmaller"
  | "squishSmall"
  | "squishMiddle"
  | "squishMedium"
  | "squishMinor"
  | "squishLarge"
  | "squishShort"
  | "stretchSmall"
  | "stretchMiddle"
  | "stretchHalf"
  | "stretchMedium"
  | "stretchLarge"
  | "stretchLarger";

export type PropsTypeText =
  | "headingXXXLR"
  | "headingXXXLM"
  | "headingXXXL"
  | "headingXXL"
  | "headingMD"
  | "headingMDL"
  | "subtitleXXXXL"
  | "subtitleXXXL"
  | "subtitleXXL"
  | "subtitleXL"
  | "subtitleX"
  | "subtitleLG"
  | "subtitleMDM"
  | "subtitleMD"
  | "paragraphXXXL"
  | "paragraphXXXXL"
  | "paragraphXXL"
  | "paragraphXXLL"
  | "paragraphXL"
  | "paragraphLG"
  | "paragraphL"
  | "paragraphMDM"
  | "paragraphMD"
  | "paragraphMDL"
  | "paragraphSML"
  | "paragraphSM"
  | "paragraphXS"
  | "paragraphXXS"
  | "paragraphXXXS"
  | "paragraphXXXXS"
  | "linkXL"
  | "linkLG"
  | "linkXS"
  | "linkSM"
  | "linkMDM";

export type PropsBorderRadius =
  | "smaller"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "larger"
  | "pill"
  | "circle"
  | "none";

export type PropsShadowTokens =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "safe1"
  | "safe2"
  | "safe3"
  | "none";

export type PropsTypeButton =
  | "primaryLarge"
  | "primaryMedium"
  | "primarySmall"
  | "secundaryLarge"
  | "secundaryMedium"
  | "secundarySmall"
  | "secundaryTiny"
  | "ghostLarge"
  | "ghostMedium"
  | "ghostSmall"
  | "quarckIcon"
  | "blocked"
  | "primaryLargeCherry"
  | "secondaryLargeCherry"
  | "secundaryQuarck"
  | "tiny";
