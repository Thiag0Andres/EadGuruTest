import React from "react";
import { GestureResponderEvent } from "react-native";

import {
  PropsSpacesVertical,
  PropsSpacesHorizontal,
} from "../../../../styles/Models";
import { PropsTokensTextCore } from "../../../../styles/Models/type.text";

export interface TextProps {
  lineThrough?: boolean;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  type: propsText;
  underline?: boolean;
  color?: string;
  align?: "left" | "center" | "right";
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
  padding?: string | number;
  position?: "relative" | "absolute";
  index?: number;
  scale: number;
  bold?: boolean;
}

export interface TextPropsComponent {
  testID?: string;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  children?: React.ReactNode[] | undefined | string | number;
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
  type?: PropsTokensTextCore;
  lineThrough?: boolean;
  underline?: boolean;
  color?: string;
  align?: "left" | "center" | "right";
  padding?: string | number;
  position?: "relative" | "absolute";
  numberOfLines?: number;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  accessibilityLabel?: string;
  colorLink?: string;
  colorBold?: string;
  onPress?: (event?: string | GestureResponderEvent) => void;
  onLink?: (event?: string | GestureResponderEvent) => void;
}

export interface TextPropsComponentView extends TextPropsComponent {}

interface propsText {
  font?: string;
  fontSize: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textDecoration?: string;
}

export interface propsFontWeight {
  font: {
    light: string;
    regular: string;
    medium: string;
    bold: string;
  };
}
