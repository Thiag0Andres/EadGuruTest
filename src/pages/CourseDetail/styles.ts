import styled from "styled-components/native";
import theme from "../../theme/themes";

interface Props {
  isIncrease: boolean;
  isSmaller: boolean;
}

export const Line = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.LIGHT_BASE_03};
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const TitleText = styled.Text<Props>`
  color: ${theme.colors.SECONDARY_BASE_01};
  font-family: ${({ isSmaller }) =>
    isSmaller ? theme.FONT_WEIGHT.Barlow_500 : theme.FONT_WEIGHT.Barlow_600};
  font-size: ${({ isSmaller }) => (isSmaller ? "16px" : "18px")};
  margin-left: ${({ isSmaller }) => (isSmaller ? "20px" : "0")};
`;

export const CountText = styled.Text`
  color: ${theme.colors.DARK_BASE_02};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 14px;
`;

export const SubText = styled.Text<Props>`
  color: ${theme.colors.PRYMARY_BASE_02};
  font-family: ${({ isIncrease }) =>
    isIncrease ? theme.FONT_WEIGHT.Barlow_600 : theme.FONT_WEIGHT.Barlow_500};
  font-size: ${({ isIncrease }) => (isIncrease ? "16px" : "14px")};
  text-align: justify;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.SECONDARY_BASE_01};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 16px;
  padding: 12px 12px 0 12px;
`;
