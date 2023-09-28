import { SafeAreaView } from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

import normalize from "../../constants/normalize";
import {
  transformVerticalMargin,
  transformHorizontalMargin,
  backgroundOptions,
  transformPaddingMargin,
  transformBorderRadius,
  transformBorderWidth,
} from "../../constants/Tokens/tokens";
import {
  BoxContainerProps,
  BoxProps,
  BoxShadowProps,
  TouchBoxProps,
} from "./Models";

const transformValue = (value: string | number) => {
  if (typeof value === "number" && value > 1) {
    return `${value}px`;
  }

  return value;
};

export const KeyBoard = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const BoxContainer = styled.View<BoxContainerProps>`
  flex: 1;
  margin-top: ${({ mt }) =>
    mt ? normalize(transformHorizontalMargin(mt)) : 0}px;
  padding: ${({ pd }) =>
    pd ? transformValue(transformPaddingMargin(pd)) : `${0}px`};
  background-color: ${({ bg }) => bg ?? "transparent"};
`;

export const BoxSafeArea = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BoxHeader = styled.View`
  width: "auto";
`;

export const Box = styled.View<BoxProps>`
  width: ${({ width }) => (width ? transformValue(width) : "auto")};
  max-width: ${({ maxWidth }) =>
    maxWidth ? transformValue(maxWidth) : "auto"};
  height: ${({ height }) => (height ? transformValue(height) : "auto")};
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
  padding: ${({ pd }) =>
    pd ? transformValue(transformPaddingMargin(pd)) : `${0}px`};
  flex-direction: ${({ direction }) => (direction ? "row" : "column")};
  align-items: ${({ align }) => align ?? "flex-start"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  background-color: ${({ bgColor }) => bgColor ?? "transparent"};
  border-radius: ${({ borderRadius, width, theme, br }) =>
    borderRadius === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadius || br)}px;
  border-top-left-radius: ${({ borderRadiusTopLeft, width, theme, br }) =>
    borderRadiusTopLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopLeft || br)}px;
  border-top-right-radius: ${({ borderRadiusTopRight, width, theme, br }) =>
    borderRadiusTopRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopRight || br)}px;
  border-bottom-left-radius: ${({ borderRadiusBottomLeft, width, theme, br }) =>
    borderRadiusBottomLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomLeft || br)}px;
  border-bottom-right-radius: ${({
    borderRadiusBottomRight,
    width,
    theme,
    br,
  }) =>
    borderRadiusBottomRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomRight || br)}px;
  border-bottom-width: ${({ borderBottomWidth, bw }) =>
    borderBottomWidth || bw
      ? `${transformBorderWidth(borderBottomWidth || bw)}`
      : 0}px;
  border-top-width: ${({ borderTopWidth, bw }) =>
    borderTopWidth || bw
      ? `${transformBorderWidth(borderTopWidth || bw)}`
      : 0}px;
  border-left-width: ${({ borderLeftWidth, bw }) =>
    borderLeftWidth || bw
      ? `${transformBorderWidth(borderLeftWidth || bw)}`
      : 0}px;
  border-right-width: ${({ borderRightWidth, bw }) =>
    borderRightWidth || bw
      ? `${transformBorderWidth(borderRightWidth || bw)}`
      : 0}px;
  border-bottom-color: ${({ borderColor }) => borderColor ?? "none"};
  border-top-color: ${({ borderColor }) => borderColor ?? "none"};
  border-left-color: ${({ borderColor }) => borderColor ?? "none"};
  border-right-color: ${({ borderColor }) => borderColor ?? "none"};
  position: ${({ position }) => position ?? "relative"};
  flex-wrap: ${({ wrap }) => wrap ?? "nowrap"};
  z-index: ${({ index }) => index ?? 99};
  overflow: ${({ overflow }) => overflow ?? "visible"};
`;

export const TouchBox = styled.TouchableOpacity<TouchBoxProps>`
  width: ${({ width }) => (width ? transformValue(width) : "auto")};
  max-width: ${({ maxWidth }) =>
    maxWidth ? transformValue(maxWidth) : "auto"};
  height: ${({ height }) => (height ? transformValue(height) : "auto")};
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
  padding: ${({ pd }) =>
    pd ? transformValue(transformPaddingMargin(pd)) : `${0}px`};
  flex-direction: ${({ direction }) => (direction ? "row" : "column")};
  align-items: ${({ align }) => align ?? "center"};
  justify-content: ${({ justify }) => justify ?? "center"};
  background-color: ${({ bgColor }) => bgColor ?? "transparent"};
  border-top-left-radius: ${({ borderRadiusTopLeft, width, theme, br }) =>
    borderRadiusTopLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopLeft || br)}px;
  border-top-right-radius: ${({ borderRadiusTopRight, width, theme, br }) =>
    borderRadiusTopRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopRight || br)}px;
  border-bottom-left-radius: ${({ borderRadiusBottomLeft, width, theme, br }) =>
    borderRadiusBottomLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomLeft || br)}px;
  border-bottom-right-radius: ${({
    borderRadiusBottomRight,
    width,
    theme,
    br,
  }) =>
    borderRadiusBottomRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomRight || br)}px;
  border-bottom-width: ${({ borderBottomWidth, bw }) =>
    borderBottomWidth || bw
      ? `${transformBorderWidth(borderBottomWidth || bw)}`
      : 0}px;
  border-top-width: ${({ borderTopWidth, bw }) =>
    borderTopWidth || bw
      ? `${transformBorderWidth(borderTopWidth || bw)}`
      : 0}px;
  border-left-width: ${({ borderLeftWidth, bw }) =>
    borderLeftWidth || bw
      ? `${transformBorderWidth(borderLeftWidth || bw)}`
      : 0}px;
  border-right-width: ${({ borderRightWidth, bw }) =>
    borderRightWidth || bw
      ? `${transformBorderWidth(borderRightWidth || bw)}`
      : 0}px;
  border-bottom-color: ${({ borderColor }) => borderColor ?? "none"};
  border-top-color: ${({ borderColor }) => borderColor ?? "none"};
  border-left-color: ${({ borderColor }) => borderColor ?? "none"};
  border-right-color: ${({ borderColor }) => borderColor ?? "none"};
  position: ${({ position }) => position ?? "relative"};
  flex-wrap: ${({ wrap }) => wrap ?? "nowrap"};
  z-index: ${({ index }) => index ?? 99};
`;

export const ShadowBox = styled.View<BoxShadowProps>`
  width: ${({ width }) => (width ? transformValue(width) : "100%")};
  height: ${({ height }) => (height ? transformValue(height) : "auto")};
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
  background-color: ${({ bgColor }) => bgColor ?? "transparent"};
  border-bottom-width: ${({ borderBottomWidth, bw }) =>
    borderBottomWidth || bw
      ? `${transformBorderWidth(borderBottomWidth || bw)}`
      : 0}px;
  border-top-width: ${({ borderTopWidth, bw }) =>
    borderTopWidth || bw
      ? `${transformBorderWidth(borderTopWidth || bw)}`
      : 0}px;
  border-left-width: ${({ borderLeftWidth, bw }) =>
    borderLeftWidth || bw
      ? `${transformBorderWidth(borderLeftWidth || bw)}`
      : 0}px;
  border-right-width: ${({ borderRightWidth, bw }) =>
    borderRightWidth || bw
      ? `${transformBorderWidth(borderRightWidth || bw)}`
      : 0}px;
  border-top-left-radius: ${({ borderRadiusTopLeft, width, theme, br }) =>
    borderRadiusTopLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopLeft || br)}px;
  border-top-right-radius: ${({ borderRadiusTopRight, width, theme, br }) =>
    borderRadiusTopRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusTopRight || br)}px;
  border-bottom-left-radius: ${({ borderRadiusBottomLeft, width, theme, br }) =>
    borderRadiusBottomLeft === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomLeft || br)}px;
  border-bottom-right-radius: ${({
    borderRadiusBottomRight,
    width,
    theme,
    br,
  }) =>
    borderRadiusBottomRight === "circle" || br === "circle"
      ? width ?? theme.borderRadius.circle
      : transformBorderRadius(borderRadiusBottomRight || br)}px;
  box-shadow: ${({ shadow }) => shadow ?? "0px 0px #00000000"};
  position: ${({ position }) => position ?? "relative"};
  padding: ${({ pd }) =>
    pd ? transformValue(transformPaddingMargin(pd)) : `${0}px`};
`;
