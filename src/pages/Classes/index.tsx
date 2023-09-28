import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { Box, Screen } from "../../components";
import { data } from "../../../mocks/data";
import { FlatList } from "react-native";

interface IData {
  id: number;
  title: string;
  instructor: string;
  description: string;
  src: any;
}

const Classes = () => {
  const navigation = useNavigation();

  const renderItem = (item: IData) => (
    <>
      <Box width="100%" direction align="center" pd={40}>
        <S.Image source={item.src} resizeMode="contain" />
        <S.InfoCourse>
          <S.TitleText isBold>{item.title}</S.TitleText>
          <S.SubText>{item.instructor}</S.SubText>
        </S.InfoCourse>
      </Box>
      <S.Line />
    </>
  );

  return (
    <Screen
      backbutton
      backPress={() => navigation.navigate("Courses")}
      title="Aulas"
      hasScroll={false}
    >
      <Box width="100%">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderItem(item)}
        />
      </Box>
    </Screen>
  );
};

export default Classes;
