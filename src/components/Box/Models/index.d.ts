import { ReactNode } from "react";
import { GestureResponderEvent, NativeSyntheticEvent } from "react-native";

import {
  PropsSpacesHorizontal,
  PropsSpacesVertical,
  PropsPadding,
  PropsBorderRadius,
  PropsBorderWidth,
  PropsShadowTokens,
} from "../../../../styles/Models";

type FlexDirectionType = "row" | "column" | "row-reverse" | "column-reverse";
type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type FlexWrapType = "wrap" | "nowrap" | "wrap-reverse" | undefined;

export interface BoxContainerProps {
  justify?: JustifyContentType;
  align?: FlexAlignType;
  type?: "default" | "scrim" | "secundary";
}

export interface PropsLayout {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface LayoutEvent {
  layout: PropsLayout;
}

export type BoxProps = {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
  borderRadiusTopLeft?: PropsBorderRadius;
  borderRadiusTopRight?: PropsBorderRadius;
  borderRadiusBottomLeft?: PropsBorderRadius;
  borderRadiusBottomRight?: PropsBorderRadius;
  br?: PropsBorderRadius;
  borderBottomWidth?: PropsBorderWidth;
  borderTopWidth?: PropsBorderWidth;
  borderLeftWidth?: PropsBorderWidth;
  borderRightWidth?: PropsBorderWidth;
  bw?: PropsBorderWidth;
  borderColor?: string;
  pd?: PropsPadding;
  direction?: boolean;
  align?: FlexAlignType;
  justify?: JustifyContentType;
  wrap?: FlexWrapType;
  bgColor?: string;
  position?: "relative" | "absolute";
  shadow?: string;
  index?: number;
  overflow?: "hidden" | "visible" | "scroll";
};

export type TouchBoxProps = {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
  borderRadiusTopLeft?: PropsBorderRadius;
  borderRadiusTopRight?: PropsBorderRadius;
  borderRadiusBottomLeft?: PropsBorderRadius;
  borderRadiusBottomRight?: PropsBorderRadius;
  br?: PropsBorderRadius;
  borderBottomWidth?: PropsBorderWidth;
  borderTopWidth?: PropsBorderWidth;
  borderLeftWidth?: PropsBorderWidth;
  borderRightWidth?: PropsBorderWidth;
  bw?: PropsBorderWidth;
  borderColor?: string;
  pd?: PropsPadding;
  direction?: boolean;
  align?: FlexAlignType;
  justify?: JustifyContentType;
  wrap?: FlexWrapType;
  bgColor?: string;
  position?: "relative" | "absolute";
  shadow?: string;
  index?: number;
  overflow?: "hidden" | "visible" | "scroll";
  onPress?: null | ((event: GestureResponderEvent) => void);
};

export type PropsBoxShadow = {
  testID?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
  borderRadiusTopLeft?: PropsBorderRadius;
  borderRadiusTopRight?: PropsBorderRadius;
  borderRadiusBottomLeft?: PropsBorderRadius;
  borderRadiusBottomRight?: PropsBorderRadius;
  br?: PropsBorderRadius;
  borderBottomWidth?: PropsBorderWidth;
  borderTopWidth?: PropsBorderWidth;
  borderLeftWidth?: PropsBorderWidth;
  borderRightWidth?: PropsBorderWidth;
  borderColor?: string;
  pd?: PropsPadding;
  bgColor?: string;
  position?: "relative" | "absolute";
  type?: PropsShadowTokens;
  children?: ReactNode;
  onLayout?: (event: NativeSyntheticEvent<LayoutEvent>) => void;
};

export interface BoxShadowProps extends PropsBoxShadow {
  shadow?: string;
}
