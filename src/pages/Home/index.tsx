import React from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/eadguru-6.png";
import * as S from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ImageLogo source={logo} resizeMode="contain" />
      <S.Button
        onPress={() => {
          navigation.navigate("Courses");
        }}
      >
        <S.ButtonText>Cursos</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Home;
