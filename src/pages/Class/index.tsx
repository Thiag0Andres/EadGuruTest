import React, { useRef, useState, useEffect } from "react";
import { BackHandler } from "react-native";
import ClassView from "./view";
import { PLAYER_STATES } from "react-native-media-controls";
import { Props } from "./Models";

const Class: React.FC<Props> = ({
  src,
  title,
  navigation,
  startLesson,
  setFinishLesson,
  alreadyPlayedOnce,
  setHideOthersElementsOfScreen,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [resizeMode, setResizeMode] = useState("contain");

  const videoPlayer = useRef();

  const onSeek = (seek) => {
    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerStateValue, a, b, c) => {
    setPaused(!paused);
    setPlayerState(playerStateValue);
    if (playerStateValue === 0 && !alreadyPlayedOnce) {
      startLesson();
    }
  };

  const onReplay = () => {
    videoPlayer.current.seek(0);
    setPlayerState(PLAYER_STATES.PAUSED);
    setPaused(true);
    setCurrentTime(0);
  };

  const onProgress = (data) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onEnd = () => {
    setFinishLesson();
    setPlayerState(PLAYER_STATES.ENDED);
  };

  const onError = () => {};

  const exitFullScreen = () => {};

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    if (isFullScreen) {
      // Orientation.lockToPortrait();
      setResizeMode("contain");
    } else {
      setResizeMode("cover");
      // Orientation.lockToLandscape();
    }

    setHideOthersElementsOfScreen(!isFullScreen);
    setIsFullScreen(!isFullScreen);
  };

  const onSeeking = (currentTimeValue) => {
    setCurrentTime(currentTimeValue);
  };

  useEffect(() => {
    if (isFullScreen) {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          onFullScreen();
          return true;
        }
      );

      return () => backHandler.remove();
    }
  }, [isFullScreen]);

  return (
    <ClassView
      src={src}
      onEnd={onEnd}
      title={title}
      paused={paused}
      onLoad={onLoad}
      onSeek={onSeek}
      onError={onError}
      onPaused={onPaused}
      onReplay={onReplay}
      duration={duration}
      onSeeking={onSeeking}
      isLoading={isLoading}
      onProgress={onProgress}
      resizeMode={resizeMode}
      currentTime={currentTime}
      onLoadStart={onLoadStart}
      playerState={playerState}
      videoPlayer={videoPlayer}
      onFullScreen={onFullScreen}
      isFullScreen={isFullScreen}
      exitFullScreen={exitFullScreen}
      enterFullScreen={enterFullScreen}
    />
  );
};

export default Class;
