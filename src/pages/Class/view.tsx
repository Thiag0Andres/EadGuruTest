import React, { useCallback, useState } from "react";
import Video from "react-native-video";
import MediaControls from "react-native-media-controls";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Row,
  Toolbar,
  Container,
  SpeedLabel,
  VideoStyle,
  ToolbarTitle,
  ButtonSpeedControl,
  ContainerSpeedControl,
} from "./styles";

import { PropsView } from "./Models";

const Player: React.FC<PropsView> = (
  src,
  title,
  onEnd,
  paused,
  onSeek,
  onLoad,
  duration,
  onPaused,
  onReplay,
  onSeeking,
  isLoading,
  onProgress,
  resizeMode,
  videoPlayer,
  onLoadStart,
  playerState,
  currentTime,
  isFullScreen,
  onFullScreen
) => {
  const [rate, setRate] = useState(1);

  const setVideoSpeed = useCallback(
    (newRate) => {
      if (newRate >= 0.1 && newRate <= 3.0) {
        setRate(parseFloat(newRate.toFixed(1)));
      }
    },
    [rate]
  );

  return (
    <>
      <Container>
        <Video
          rate={rate}
          volume={10}
          onEnd={onEnd}
          onLoad={onLoad}
          paused={paused}
          ref={videoPlayer}
          style={VideoStyle}
          resizeMode={"contain"}
          onProgress={onProgress}
          onLoadStart={onLoadStart}
          onFullScreen={isFullScreen}
          source={{
            // uri:
            //   'https://player.vimeo.com/external/465571336.hd.mp4?s=f5f229bb2ffe2ac2b98ec638ea80167ac1e7cfc8&profile_id=174&oauth2_token_id=1433989805',
            uri: src,
          }}
        />

        <MediaControls
          onSeek={onSeek}
          mainColor="#333"
          duration={duration}
          onPaused={onPaused}
          onReplay={onReplay}
          isLoading={isLoading}
          onSeeking={onSeeking}
          playerState={playerState}
          progress={currentTime}
          onFullScreen={onFullScreen}
        >
          <MediaControls.Toolbar>
            <Row>
              <Toolbar>
                <ToolbarTitle>{title}</ToolbarTitle>
              </Toolbar>

              <ContainerSpeedControl>
                <ButtonSpeedControl onPress={() => setVideoSpeed(rate - 0.1)}>
                  <Icon size={15} name={"remove"} color={"#FFF"} />
                </ButtonSpeedControl>
                <SpeedLabel>{String(parseFloat(rate).toFixed(1))}x</SpeedLabel>
                <ButtonSpeedControl onPress={() => setVideoSpeed(rate + 0.1)}>
                  <Icon size={15} name={"add"} color={"#FFF"} />
                </ButtonSpeedControl>
              </ContainerSpeedControl>
            </Row>
          </MediaControls.Toolbar>
        </MediaControls>
      </Container>
    </>
  );
};

export default Player;
