import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonText, Container } from "./styles";
import { PropsView } from "./Models";
import { Video, ResizeMode } from "expo-av";
import { Screen } from "../../components";
import { StyleSheet, View } from "react-native";

const ClassView: React.FC<PropsView> = ({ src, title, navigation }) => {
  const video: any = useRef(null);
  const [status, setStatus] = useState({});

  //Focus Event: to be fired when the HomeScreen is focused.
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Focus");
      //Every time the screen is focused the Video starts playing
      if (video) {
        video.current.playAsync();
      }
    });
    return unsubscribe;
  }, [navigation]);

  //Blur Event: to be fired when the HomeScreen loses focus.
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      console.log("Blur");
      //Every time the screen loses focus the Video is paused
      if (video) {
        video.current.pauseAsync();
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Screen
      backbutton
      backPress={() => {
        navigation.goBack();
        video.current.pauseAsync();
      }}
      title={title}
    >
      <Container>
        <Video
          ref={video}
          style={styles.video}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls={true}
          shouldPlay={true}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        <Button
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <ButtonText>{status.isPlaying ? "Pause" : "Play"}</ButtonText>
        </Button>
      </Container>
    </Screen>
  );
};

export default ClassView;

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
