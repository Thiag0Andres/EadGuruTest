import styled from "styled-components/native";
import theme from "../../theme/themes";

export const Line = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.LIGHT_BASE_04};
`;

export const Image = styled.ImageBackground`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const InfoCourse = styled.View`
  width: 70%;
  margin-left: 20px;
`;

export const TitleText = styled.Text`
  color: ${theme.colors.SECONDARY_BASE_01};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 16px;
`;

export const SubText = styled.Text`
  color: ${theme.colors.PRYMARY_BASE_02};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 14px;
`;
