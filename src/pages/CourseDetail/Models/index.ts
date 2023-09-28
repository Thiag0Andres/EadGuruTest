import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PropsRootStack } from "../../../routes/Models";
import { RouteProp } from "@react-navigation/native";

export interface Props {
  navigation: NativeStackNavigationProp<PropsRootStack>;
  route: RouteProp<PropsRootStack, "CourseDetail">;
}
