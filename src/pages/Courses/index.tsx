import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { Screen } from "../../components";

const Courses = () => {
  const navigation = useNavigation();

  return (
    <Screen
      backbutton
      backPress={() => navigation.navigate("Home")}
      title="Cursos"
    ></Screen>
  );
};

export default Courses;
