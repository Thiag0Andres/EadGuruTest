import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView } from "react-native";
import { PropsRootStack } from "../../../routes/Models";

export interface Props {
  scrollHeader?: boolean;
  children?: React.ReactElement;
  fixedBottom?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  loadingComponent?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | boolean
    | undefined;
  modalsComponent?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  title?: string;
  bgColor?: string;
  originRefresh?: boolean;
  filterName?: string;
  iconFilterName?: string;
  filter?: boolean;
  isClose?: boolean;
  onClose?: () => void;
  navigationFilter?: () => void;
  functionFilter?: () => void;
  backbutton?: boolean;
  backPress?: () => void;
  events?: string[];
  hasScroll?: boolean;
  isolatedHeader?: boolean;
  refScrollView?: React.LegacyRef<ScrollView> | undefined;
}

export interface PropsView extends Props {
  navigation: NativeStackNavigationProp<PropsRootStack>;
  _toggleMenu: () => void;
  isVisbleMenu: boolean;
}
