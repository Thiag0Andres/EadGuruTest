import React from "react";
import * as S from "./styles";
import { Box, BoxContainer, Screen, TouchBox } from "../../components";
import { dataClasses } from "../../../mocks/data";
import { Props } from "./Models";

interface IData {
  id: number;
  title: string;
  url: string;
}

const CourseDetail: React.FC<Props> = ({ navigation, route: { params } }) => {
  const { data } = params || {};

  return (
    <Screen
      backbutton
      backPress={() => navigation.goBack()}
      title="Detalhes do curso"
    >
      <BoxContainer align="center">
        <Box align="center">
          <S.Image source={data.src} resizeMode="cover" />
          <Box align="center" mt="xxxxs" mb="xxxxs">
            <S.TitleText>{data.title}</S.TitleText>
            <Box direction align="center">
              <S.SubText>{data.instructor}</S.SubText>
              <S.SubText> • </S.SubText>
              <S.SubText isIncrease>{data.duration}</S.SubText>
            </Box>
          </Box>
          <Box pd="innerMedium">
            <S.SubText>{data.description}</S.SubText>
          </Box>
        </Box>
        <S.SubTitle>Conteúdo do curso: </S.SubTitle>
        <BoxContainer pd="innerMedium">
          {dataClasses.map((item: IData) => (
            <Box key={item.id}>
              <TouchBox
                width="100%"
                align="flex-start"
                onPress={() => navigation.navigate("Class", { data: item })}
              >
                <Box direction align="center" mt="xxxxs" mb="xxxxs">
                  <S.CountText>{item.id}</S.CountText>
                  <S.TitleText isSmaller>{item.title}</S.TitleText>
                </Box>
              </TouchBox>
              <S.Line />
            </Box>
          ))}
        </BoxContainer>
      </BoxContainer>
    </Screen>
  );
};

export default CourseDetail;
