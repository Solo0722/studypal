import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CONSTANTS } from "../shared/constants";
import TabNavigator from "./TabNavigator";
import RootLanding from "../screens/Auth/RootLanding";
import Onboard from "../screens/Auth/Onboard";
import Signin from "../screens/Auth/Signin";
import Signup from "../screens/Auth/Signup";
import Note from "../screens/Notes/Note";
import { theme } from "../shared/theme";
import CreateEditNote from "../screens/Notes/CreateEditNote";

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
      <Stack.Screen name={AppPages.ONBOARD} component={Onboard} />
      <Stack.Screen name={AppPages.SIGNUP} component={Signup} />
      <Stack.Screen name={AppPages.LOGIN} component={Signin} />
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerShadowVisible: true,
          headerBackgroundContainerStyle: {
            backgroundColor: `${theme.ACCENT}`,
          },
          headerTitleStyle: {
            color: `${theme.FOREGROUND_2}`,
            fontWeight: "800",
            fontFamily: "Poppins-bold",
          },
        }}
      >
        <Stack.Screen name={AppPages.NOTE} component={Note} />
        <Stack.Screen
          name={AppPages.CREATEEDITNOTE}
          component={CreateEditNote}
        />
      </Stack.Group>
      <Stack.Screen name={AppPages.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
