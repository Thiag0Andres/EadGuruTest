import React from "react";
import logo from "../../assets/images/eadguru-6.png";
import { Box } from "../../components";
import { Props } from "./Models";
import theme from "../../theme/themes";
import * as S from "./styles";

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Box
      width="100%"
      height="100%"
      pd="innerGreat"
      justify="center"
      align="center"
      bgColor={theme.colors.LIGHT_BASE_01}
    >
      <S.ImageLogo source={logo} resizeMode="contain" />
      <S.Button
        onPress={() => {
          navigation.navigate("Courses");
        }}
      >
        <S.ButtonText>Cursos</S.ButtonText>
      </S.Button>
    </Box>
  );
};

export default Home;
