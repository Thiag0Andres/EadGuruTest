import styled from "styled-components/native";
import theme from "../../theme/themes";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.SECONDARY_BASE_02};
  border-radius: 8px;
  margin-top: 100px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.LIGHT_BASE_01};
  font-family: ${theme.FONT_WEIGHT.Barlow_600};
  font-size: 16px;
`;
