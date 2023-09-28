import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import mocks from "./mocked";
import * as S from "./styles";
import Screen from "../../components/Screen";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={"#ffffff"} />
      <Screen></Screen>
    </>
  );
};

export default Home;
