import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Classes from "../pages/Classes";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Courses" component={Courses} />
      <Screen name="Classes" component={Classes} />
    </Navigator>
  );
};

export default Routes;
