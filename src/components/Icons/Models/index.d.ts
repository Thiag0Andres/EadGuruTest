import { ImageStyle, StyleProp } from "react-native";

import { IconSet } from "react-native-icomoon";

import {
  PropsSpacesHorizontal,
  PropsSpacesVertical,
} from "../../../../styles/Models";
import {
  PropsIconsNameCore,
  PropsSizeIconCore,
} from "../../../../styles/Models/type.icon";

export interface PropsIcon {
  size?: PropsSizeIconCore;
  name?: PropsIconsNameCore;
  style?: StyleProp<ImageStyle> | undefined;
  color?: string;
  onPress?: () => void;
  iconSet?: IconSet;
  testID?: string;
  disabled?: boolean;
  mt?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mb?: PropsSpacesHorizontal;
  mr?: PropsSpacesVertical;
}

export interface propsItem {
  properties: {
    name: string;
  };
}
