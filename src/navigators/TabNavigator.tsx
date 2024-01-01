import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Tabbar from "../components/Tabbar";
import { Iconify } from "react-native-iconify";
import Home from "../screens/Home/Home";
import Notes from "../screens/Notes/Notes";
import Calendar from "../screens/Calendar/Calendar";
import Profile from "../screens/Profile/Profile";
import Schedule from "../screens/Schedule/Schedule";
import { theme } from "../shared/theme";
import { CONSTANTS } from "../shared/constants";
import WelcomeBanner from "../screens/Home/WelcomeBanner";

const TabNavigator = () => {
  const tabs = [
    {
      name: CONSTANTS.AppPages.HOME,
      label: "Home",
      component: Home,
      activeIconName: (
        <Iconify
          icon="solar:home-smile-bold"
          size={22}
          color={theme.PRIMARY}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:home-smile-outline"
          size={22}
          color={theme.FOREGROUND_2}
          strokeWidth={20}
        />
      ),
    },
    {
      name: CONSTANTS.AppPages.NOTES,
      label: "Notes",
      component: Notes,
      activeIconName: (
        <Iconify
          icon="solar:documents-bold"
          size={22}
          color={theme.PRIMARY}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:documents-outline"
          size={22}
          color={theme.FOREGROUND_2}
          strokeWidth={20}
        />
      ),
    },
    {
      name: CONSTANTS.AppPages.SCHEDULE,
      label: "Schedule",
      component: Schedule,
      activeIconName: (
        <Iconify
          icon="solar:square-academic-cap-bold"
          size={22}
          color={theme.PRIMARY}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:square-academic-cap-outline"
          size={22}
          color={theme.FOREGROUND_2}
          strokeWidth={20}
        />
      ),
    },
    {
      name: CONSTANTS.AppPages.CALENDAR,
      label: "Calendar",
      component: Calendar,
      activeIconName: (
        <Iconify
          icon="solar:calendar-bold"
          size={22}
          color={theme.PRIMARY}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:calendar-outline"
          size={22}
          color={theme.FOREGROUND_2}
          strokeWidth={20}
        />
      ),
    },

    {
      name: CONSTANTS.AppPages.PROFILE,
      label: "Profile",
      component: Profile,
      activeIconName: (
        <Iconify
          icon="solar:user-bold"
          size={22}
          color={theme.PRIMARY}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:user-outline"
          size={22}
          color={theme.FOREGROUND_2}
          strokeWidth={20}
        />
      ),
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <Tabbar {...props} />;
      }}
      initialRouteName={CONSTANTS.AppPages.HOME}
      sceneContainerStyle={{
        backgroundColor: `${theme.BACKGROUND}`,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        headerShadowVisible: true,
        headerBackgroundContainerStyle: {
          backgroundColor: `${theme.ACCENT}`,
        },

        tabBarAllowFontScaling: true,
      }}
    >
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={index + _.name}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarActiveIcon: _.activeIconName,
              tabBarInactiveIcon: _.inactiveIconName,
              headerTitle:
                _.name === CONSTANTS.AppPages.HOME
                  ? () => <WelcomeBanner />
                  : _.label,
              headerTitleStyle: {
                color: `${theme.FOREGROUND_2}`,
                fontWeight: "800",
                fontFamily: "Poppins-bold",
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
