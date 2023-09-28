import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Courses from "../pages/Courses";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Courses" component={Courses} />
    </Navigator>
  );
};

export default Routes;
