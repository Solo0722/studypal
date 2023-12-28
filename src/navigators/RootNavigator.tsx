import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CONSTANTS } from "../shared/constants";
import TabNavigator from "./TabNavigator";
import RootLanding from "../screens/Auth/RootLanding";

const RootNavigator = () => {
  const { AppPages } = CONSTANTS;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={AppPages.ROOTLANDING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppPages.ROOTLANDING} component={RootLanding} />
      <Stack.Screen name={AppPages.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
