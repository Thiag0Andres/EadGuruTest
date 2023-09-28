import styled from "styled-components/native";
import theme from "../../theme/themes";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 150px;
`;

export const TitleText = styled.Text`
  color: ${theme.colors.SECONDARY_BASE_01};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 16px;
  text-align: center;
`;

export const SubText = styled.Text`
  color: ${theme.colors.PRYMARY_BASE_02};
  font-family: ${theme.FONT_WEIGHT.Barlow_500};
  font-size: 14px;
`;
