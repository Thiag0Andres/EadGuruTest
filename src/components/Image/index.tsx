import { Dimensions } from "react-native";

import styled from "styled-components/native";

import normalize from "../../constants/normalize";
import {
  transformBorderRadius,
  transformHorizontalMargin,
  transformVerticalMargin,
} from "../../constants/Tokens/tokens";
import { PropsImage, PropsImageBackground } from "./Models";

const deviceDimensions = Dimensions.get("window");
const transformValue = (value: string | number) => {
  if (value > 1) {
    return `${value}px`;
  }
  return value;
};

export const Image = styled.Image.attrs({
  pagingEnabled: true,
})<PropsImage>`
  width: ${({ width }) =>
    (width && width > 1 ? `${width}px` : width) || "100%"};
  height: ${({ height }) =>
    (height && height > 1 ? `${height}px` : height) || "100%"};
  max-width: ${({ maxWidth }) =>
    maxWidth ? transformValue(maxWidth) : "auto"};
  min-width: ${({ minWidth }) =>
    minWidth ? transformValue(minWidth) : "auto"};
  min-height: ${({ minHeight }) =>
    minHeight ? transformValue(minHeight) : "auto"};
  max-height: ${({ maxHeight }) =>
    maxHeight ? transformValue(maxHeight) : "auto"};
  margin-top: ${({ mt }) =>
    mt ? normalize(transformHorizontalMargin(mt)) : 0}px;
  margin-left: ${({ ml }) =>
    ml ? normalize(transformVerticalMargin(ml)) : 0}px;
  margin-bottom: ${({ mb }) =>
    mb ? normalize(transformHorizontalMargin(mb)) : 0}px;
  margin-right: ${({ mr }) =>
    mr ? normalize(transformVerticalMargin(mr)) : 0}px;
  resize-mode: ${({ resizeMode }) => resizeMode || "cover"};
  border-top-left-radius: ${({ borderRadiusTopLeft }) =>
    transformBorderRadius(borderRadiusTopLeft)}px;
  border-top-right-radius: ${({ borderRadiusTopRight }) =>
    transformBorderRadius(borderRadiusTopRight)}px;
  border-bottom-left-radius: ${({ borderRadiusBottomLeft }) =>
    transformBorderRadius(borderRadiusBottomLeft)}px;
  border-bottom-right-radius: ${({ borderRadiusBottomRight }) =>
    transformBorderRadius(borderRadiusBottomRight)}px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  position: ${({ position }) => position || "relative"};
  z-index: ${({ index }) => index || 1};
`;
export const ImageBackground = styled.ImageBackground.attrs({
  pagingEnabled: true,
})<PropsImageBackground>`
  width: ${({ width }) =>
    (width && width > 1 ? `${width}px` : width) ||
    `${deviceDimensions.width}px`};
  height: ${({ height }) =>
    (height && height > 1 ? `${height}px` : height) ||
    `${deviceDimensions.height}px`};
  margin-top: ${({ mt }) =>
    mt ? normalize(transformHorizontalMargin(mt)) : 0}px;
  margin-left: ${({ ml }) =>
    ml ? normalize(transformVerticalMargin(ml)) : 0}px;
  margin-bottom: ${({ mb }) =>
    mb ? normalize(transformHorizontalMargin(mb)) : 0}px;
  margin-right: ${({ mr }) =>
    mr ? normalize(transformVerticalMargin(mr)) : 0}px;
  resize-mode: ${({ resizeMode }) => resizeMode || "cover"};
  border-top-left-radius: ${({ borderRadiusTopLeft }) =>
    transformBorderRadius(borderRadiusTopLeft)}px;
  border-top-right-radius: ${({ borderRadiusTopRight }) =>
    transformBorderRadius(borderRadiusTopRight)}px;
  border-bottom-left-radius: ${({ borderRadiusBottomLeft }) =>
    transformBorderRadius(borderRadiusBottomLeft)}px;
  border-bottom-right-radius: ${({ borderRadiusBottomRight }) =>
    transformBorderRadius(borderRadiusBottomRight)}px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  position: ${({ position }) => position || "relative"};
  z-index: ${({ index }) => index || 1};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  opacity: ${({ opacity = 1 }) => opacity};
`;
