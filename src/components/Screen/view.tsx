import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { PRYMARY_BASE_01, LIGHT_BASE_01 } from "../../theme/colors";
import { PropsView } from "./Models";
import { KeyBoard } from "../Box";
import { behaviorToKeyBoard } from "../../constants/Utils";
import Header from "./header";

const ScreenView: React.FC<PropsView> = (props) => {
  const {
    scrollHeader,
    children,
    bgColor,
    fixedBottom,
    hasScroll,
    loadingComponent,
    modalsComponent,
    refScrollView,
  } = props;
  return (
    <View style={{ flex: 1, backgroundColor: bgColor ?? LIGHT_BASE_01 }}>
      <StatusBar backgroundColor={PRYMARY_BASE_01} barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: PRYMARY_BASE_01,
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyBoard behavior={behaviorToKeyBoard}>
          {!hasScroll && (
            <View style={{ flex: 1 }}>
              <Header {...props} />
              {children}
            </View>
          )}
          {!!hasScroll && !scrollHeader && <Header {...props} />}
          {!!hasScroll && (
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}
              ref={refScrollView ?? null}
            >
              {!!scrollHeader && <Header {...props} />}
              {children}
            </ScrollView>
          )}
          {!!fixedBottom && fixedBottom}
          {!!loadingComponent && loadingComponent}
          {!!modalsComponent && modalsComponent}
        </KeyBoard>
      </SafeAreaView>
    </View>
  );
};

export default ScreenView;
