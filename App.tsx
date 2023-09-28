import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Barlow_300Light,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";
import theme from "./src/theme/themes";
import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_300Light,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar
            backgroundColor="#FFFFFF"
            barStyle="dark-content"
            translucent={false}
          />
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </GestureHandlerRootView>
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}
