import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import Class from "../pages/Class";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Courses" component={Courses} />
      <Screen name="CourseDetail" component={CourseDetail} />
      <Screen name="Class" component={Class} />
    </Navigator>
  );
};

export default Routes;
