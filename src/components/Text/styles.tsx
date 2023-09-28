import { Dimensions } from "react-native";

import styled, { DefaultTheme } from "styled-components/native";

import normalize from "../../constants/normalize";
import {
  transformHorizontalMargin,
  transformVerticalMargin,
} from "../../constants/Tokens/tokens";
import { TextProps } from "./Models";

const isSmall = Dimensions.get("window").width === 360;

const resize = (value: string | number) => {
  if (typeof value === "number" && value > 0) {
    return `${value}px`;
  }

  return value;
};

const fontFamily = (
  type: { fontWeight?: number },
  theme: DefaultTheme,
  bold?: boolean
) => {
  if (bold) {
    return theme?.font.bold;
  }
  if (type.fontWeight === 300) {
    return theme?.font.light;
  }
  if (type?.fontWeight === 500) {
    return theme?.font.medium;
  }
  if (type?.fontWeight === 700) {
    return theme?.font.bold;
  }
  return theme?.font.regular;
};

export const TextRegular = styled.Text<TextProps>`
  width: ${({ width }) => (width ? resize(width) : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? resize(maxWidth) : "auto")};
  height: ${({ height }) => (height ? resize(height) : "auto")};
  padding: ${({ padding }) => (padding ? resize(padding) : `${0}px`)};
  margin-top: ${({ mt }) => (mt ? transformHorizontalMargin(mt) : 0)}px;
  margin-left: ${({ ml }) => (ml ? transformVerticalMargin(ml) : 0)}px;
  margin-bottom: ${({ mb }) => (mb ? transformHorizontalMargin(mb) : 0)}px;
  margin-right: ${({ mr }) => (mr ? transformVerticalMargin(mr) : 0)}px;
  font-size: ${({ type }) => normalize(type.fontSize)}px;
  color: ${({ color, theme }) => color || theme.colors.PRYMARY_BASE_02};
  text-align: ${({ align }) => align || "left"};
  font-family: ${({ theme, type, bold }) => fontFamily(type, theme, bold)};
  letter-spacing: ${({ type }) =>
    type?.letterSpacing && !isSmall ? type?.letterSpacing : 0}px;
  line-height: ${({ type }) =>
    type?.lineHeight
      ? normalize((type.fontSize / 100) * type.lineHeight)
      : 0}px;
  text-decoration: ${({ type, color, underline, lineThrough, theme }) => {
    if (underline || type?.textDecoration) {
      return `underline ${color || theme.colors.PRYMARY_BASE_02}`;
    }
    if (lineThrough) {
      return "line-through";
    }
    return "none";
  }};
  position: ${({ position }) => position || "relative"};
  z-index: ${({ index }) => index || 0};
`;
