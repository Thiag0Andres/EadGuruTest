import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { Box, BoxContainer, Screen, TouchBox } from "../../components";
import { data } from "../../../mocks/data";
import { FlatList } from "react-native";
import theme from "../../theme/themes";

interface IData {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  description: string;
  src: any;
}

const Courses = () => {
  const navigation = useNavigation();

  const renderItem = (item: IData) => (
    <Box
      mb="xs"
      borderRadiusTopRight="medium"
      borderRadiusTopLeft="medium"
      borderRadiusBottomRight="medium"
      borderRadiusBottomLeft="medium"
      borderBottomWidth="small"
      borderRightWidth="small"
      borderLeftWidth="small"
      borderColor={theme.colors.LIGHT_BASE_05}
      overflow="hidden"
    >
      <TouchBox
        width="100%"
        onPress={() => navigation.navigate("CourseDetail", { data: item })}
      >
        <S.Image source={item.src} resizeMode="cover" />
        <Box align="center" mt="xxxxs" mb="xxxxs">
          <S.TitleText>{item.title}</S.TitleText>
          <S.SubText>{item.instructor}</S.SubText>
        </Box>
      </TouchBox>
    </Box>
  );

  return (
    <Screen
      backbutton
      backPress={() => navigation.navigate("Home")}
      title="Cursos"
      hasScroll={false}
    >
      <BoxContainer mt="xxs" pd="innerGreat" align="center">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderItem(item)}
        />
      </BoxContainer>
    </Screen>
  );
};

export default Courses;
