import styled from "styled-components/native";
import theme from "../../theme/themes";

export const Container = styled.View`
  flex: 1;
`;

export const Toolbar = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ToolbarTitle = styled.Text`
  color: ${theme.colors.LIGHT_BASE_01};
  font-weight: bold;
`;

export const VideoStyle = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  alignItems: "center",
  backgroundColor: "black",
  justifyContent: "center",
};

export const Row = styled.View`
  flex-direction: row;
`;

export const ContainerSpeedControl = styled.View`
  height: 30px;
  overflow: hidden;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.3);
`;

export const ButtonSpeedControl = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const SpeedLabel = styled.Text`
  text-align: center;
  color: ${theme.colors.LIGHT_BASE_01};
`;
