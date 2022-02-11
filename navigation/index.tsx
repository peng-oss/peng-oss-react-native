import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { MoreMenuDemoScreen } from "../screens/MoreMenuDemoScreen";
import { RootStackParamList } from "./navigationType";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{ headerTitle: "😈 peng-oss-demo" }}
      />
      <Stack.Screen
        name={"MoreMenuDemoScreen"}
        component={MoreMenuDemoScreen}
      />
    </Stack.Navigator>
  );
}
