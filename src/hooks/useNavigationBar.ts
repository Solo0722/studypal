import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { theme } from "../shared/theme";

export const useNavigationBar = () => {
  const setNavbar = async () => {
    await NavigationBar.setBorderColorAsync("#00000000");
    await NavigationBar.setBackgroundColorAsync(theme.BACKGROUND);
  };
  useEffect(() => {
    if (Platform.OS === "android") {
      setNavbar();
    }
  }, []);
};
