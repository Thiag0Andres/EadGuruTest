import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PropsRootStack } from "../../../routes/Models";

export interface Props {
  src: string;
  title: string;
  navigation: NativeStackNavigationProp<PropsRootStack>;
  startLesson: any;
  setFinishLesson: any;
  alreadyPlayedOnce: any;
  setHideOthersElementsOfScreen: any;
}

export interface PropsView {
  src;
  title;
  onEnd;
  paused;
  onSeek;
  onLoad;
  duration;
  onPaused;
  onReplay;
  onSeeking;
  isLoading;
  onProgress;
  resizeMode;
  videoPlayer;
  onLoadStart;
  playerState;
  currentTime;
  isFullScreen;
  onFullScreen;
}
