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
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import Notes from "../screens/Notes/Notes";
import Calendar from "../screens/Calendar/Calendar";
import Classes from "../screens/Classes/Classes";
import Tasks from "../screens/Tasks/Tasks";
import Exams from "../screens/Exams/Exams";
import { enableScreens } from "react-native-screens";
import Profile from "../screens/Profile/Profile";
import { Iconify } from "react-native-iconify";
import DrawerContent from "../components/DrawerContent";

enableScreens(true);

const RootNavigator = () => {
  const { AppPages } = CONSTANTS;
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const MainPages = ({ navigation }) => (
    <Drawer.Navigator
      defaultStatus="closed"
      initialRouteName={AppPages.HOME}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}
      screenOptions={{
        drawerType: "slide",
        drawerActiveTintColor: theme.BACKGROUND,
        drawerActiveBackgroundColor: theme.PRIMARY,
        drawerAllowFontScaling: true,
        // headerLeft: () => (
        //   <Iconify
        //     icon="gg:menu-left"
        //     size={16}
        //     color={theme.BACKGROUND}
        //     strokeWidth={20}
        //     onPress={navigation.toggleDrawer}
        //   />
        // ),
        headerTitleStyle: {
          color: theme.BACKGROUND,
          fontFamily: "Urbanist-bold",
          fontSize: 16,
        },
        headerTintColor: theme.BACKGROUND,
        headerStyle: {
          backgroundColor: theme.PRIMARY,
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
        },
      }}
    >
      <Drawer.Screen name={AppPages.HOME} component={Home} />
      <Drawer.Screen name={AppPages.NOTES} component={Notes} />
      <Drawer.Screen name={AppPages.CALENDAR} component={Calendar} />
      <Drawer.Screen name={AppPages.CLASSES} component={Classes} />
      <Drawer.Screen name={AppPages.TASKS} component={Tasks} />
      <Drawer.Screen name={AppPages.EXAMS} component={Exams} />
      <Drawer.Screen name={AppPages.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );

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
          // headerShadowVisible: true,
          headerTitleStyle: {
            color: theme.BACKGROUND,
            fontFamily: "Urbanist-bold",
            fontSize: 16,
          },
          headerTintColor: theme.BACKGROUND,
          headerStyle: {
            backgroundColor: theme.PRIMARY,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          },
        }}
      >
        <Stack.Screen name={AppPages.NOTE} component={Note} />
        <Stack.Screen
          name={AppPages.CREATEEDITNOTE}
          component={CreateEditNote}
        />
      </Stack.Group>
      <Stack.Screen name={AppPages.HOME} component={MainPages} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
