import {
  PropsSpacesHorizontal,
  PropsSpacesVertical,
} from "../../../../styles/Models";
import { PropsIconsNameCore } from "../../../../styles/Models/type.icon";

import { PropsItem } from "../../ResultList/Models";

export interface PropsHeader {
  testID?: string;
  mt?: PropsSpacesHorizontal;
  mb?: PropsSpacesHorizontal;
  ml?: PropsSpacesVertical;
  mr?: PropsSpacesVertical;
  title?: string;
  titleColor?: string;
  isHome?: boolean;
  isClose?: boolean;
  isOption?: boolean;
  editable?: boolean;
  bgColor?: string;
  badge?: number;
  isNewHeader?: boolean;
  isSearch?: boolean;
  iconRight?: PropsIconsNameCore;
  textRight?: string;
  placeholder?: string;
  value?: string;
  hideLeftIcon?: boolean;
  onChangeText?: (value?: string) => void;
  onPressSearch?: (value?: string) => void;
  itemsSearch?: Array<PropsItem>;
  onBack?: () => void;
  onDrawer?: () => void;
  onClose?: () => void;
  onOption?: () => void;
  onPressNotificaiton?: () => void;
  onPressIconRight?: () => void;
  onPressTextRight?: () => void;
  onPressIn?: () => void;
}
