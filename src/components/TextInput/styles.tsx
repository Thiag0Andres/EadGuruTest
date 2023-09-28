import styled from "styled-components/native";

import { PropsColors } from "../../theme/Models/type.colors";

import normalize from "../../constants/normalize";
import { colorsMap } from "../../constants/Tokens/tokens";
import { propsContent, propsTextInput } from "./Models";

const getBorderColor = (
  color?: PropsColors,
  editable?: boolean,
  focus?: boolean,
  active?: string,
  error?: boolean
) => {
  if (!editable) {
    return color?.DARK_BASE_02;
  }

  if (focus && !error) {
    return color?.SECONDARY_BASE_02;
  }

  if (error) {
    return color?.ERROR_BASE_04;
  }

  if (active && !error) {
    return color?.DARK_BASE_05;
  }

  if (!active && !error) {
    return color?.LIGHT_BASE_05;
  }

  return color?.LIGHT_BASE_05;
};

const getTextColor = (
  textInputColor?: string,
  editable?: boolean,
  theme?: { colors: PropsColors }
) => {
  if (textInputColor) {
    return textInputColor;
  }

  if (!editable) {
    return theme?.colors.DARK_BASE_02;
  }

  return theme?.colors.PRYMARY_BASE_02;
};

export const TextInput = styled.TextInput<propsTextInput>`
  width: ${({ input, error, secureTextEntry }) =>
    input === "search" || input === "searchLigth" || error || secureTextEntry
      ? `86%`
      : "100%"};
  font-family: ${({ theme }) => theme.font.principal};
  font-size: ${({ theme }) => theme?.styleText?.paragraph?.lg?.fontSize}px;
  font-weight: ${({ theme }) => theme?.styleText?.paragraph?.lg?.fontWeight};
  padding: ${({ theme }) => theme.styleTextInput.default.shape.padding}px;
  color: ${({ textInputColor, editable, theme }) =>
    getTextColor(textInputColor, editable, theme)};
`;

export const Content = styled.View<propsContent>`
  width: ${({ type }) =>
    type.width > 0 ? `${normalize(type.width)}px` : type.width};
  min-height: ${normalize(37)}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ editable, color, type, bgColor }) =>
    !editable
      ? colorsMap("LIGHT_BASE_03", color)
      : bgColor || colorsMap(type.backgroundColor, color)};
  border-bottom-width: ${({ type }) => type.border.borderWidth}px;
  border-bottom-color: ${({ color, editable, focus, active, error }) =>
    getBorderColor(color, editable, focus, active, error)};
  border-radius: ${({ type }) => type.borderRadius || 0}px;
`;
