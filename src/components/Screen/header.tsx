import React, { useEffect, useState } from "react";
import { Box, Header as HeaderDS } from "../index";

import {
  PRYMARY_BASE_02,
  LIGHT_BASE_01,
  PRYMARY_BASE_01,
} from "../../theme/colors";

import { PropsView } from "./Models";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StatusBar, View } from "react-native";
import normalize from "react-native-normalize";

export const HEIGHT_HEADER = normalize(92);

const Header: React.FC<PropsView> = ({
  title,
  originRefresh,
  filterName,
  iconFilterName,
  filter,
  isClose,
  onClose,
  backbutton,
  backPress,
  navigationFilter,
  bgColor,
}) => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <Box width="100%" bgColor={LIGHT_BASE_01}>
        <HeaderDS
          title={title}
          isNewHeader
          hideLeftIcon={!backbutton}
          bgColor={LIGHT_BASE_01}
          titleColor={PRYMARY_BASE_02}
          iconRight={iconFilterName ?? null}
          isClose={isClose}
          onClose={onClose}
          onPressTextRight={navigationFilter ? navigationFilter : () => {}}
          textRight={filterName ?? ""}
          isOption={filter || navigationFilter}
          onBack={navigation.canGoBack() && navigation.goBack()}
        />
      </Box>
    );
  };

  return (
    <View style={{ backgroundColor: bgColor ?? LIGHT_BASE_01 }}>
      <StatusBar backgroundColor={PRYMARY_BASE_01} barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: PRYMARY_BASE_01,
        }}
      />
      {renderHeader()}
    </View>
  );
};

export default Header;
