import React from "react";
import { Container } from "./styles";
import { PropsView } from "./Models";
import VideoPlayer from "expo-video-player";
import { ResizeMode } from "expo-av";
import { Screen } from "../../components";

const ClassView: React.FC<PropsView> = ({ src, title, navigation }) => {
  return (
    <Screen backbutton backPress={() => navigation.goBack()} title={title}>
      <Container>
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: src,
            },
          }}
        />
      </Container>
    </Screen>
  );
};

export default ClassView;
