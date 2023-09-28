import { ReactNode } from "react";

import {
  PropsBorderRadius,
  PropsSpacesHorizontal,
  PropsSpacesVertical,
} from "../../../../styles/Models";

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
type ResizeModeType = "cover" | "contain" | "stretch" | "repeat" | "center";

export type PropsImage = {
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  mr?: PropsSpacesVertical;
  ml?: PropsSpacesVertical;
  mt?: PropsSpacesHorizontal;
  mb?: PropsSpacesHorizontal;
  resizeMode?: ResizeModeType;
  borderRadiusTopLeft?: PropsBorderRadius;
  borderRadiusTopRight?: PropsBorderRadius;
  borderRadiusBottomLeft?: PropsBorderRadius;
  borderRadiusBottomRight?: PropsBorderRadius;
  bgColor?: string;
  position?: "relative" | "absolute";
  index?: number;
};

export interface PropsImageBackground {
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
  mr?: PropsSpacesVertical;
  ml?: PropsSpacesVertical;
  mt?: PropsSpacesHorizontal;
  mb?: PropsSpacesHorizontal;
  resizeMode?: ResizeModeType;
  borderRadiusTopLeft?: PropsBorderRadius;
  borderRadiusTopRight?: PropsBorderRadius;
  borderRadiusBottomLeft?: PropsBorderRadius;
  borderRadiusBottomRight?: PropsBorderRadius;
  bgColor?: string;
  align?: FlexAlignType;
  justify?: JustifyContentType;
  position?: "relative" | "absolute";
  index?: number;
  opacity?: number;
}
