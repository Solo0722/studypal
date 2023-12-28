import { theme } from "../shared/theme";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";

export const useStatusBar = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(theme.ACCENT, true);
      StatusBar.setBarStyle("light-content");
    } else {
      StatusBar.setBarStyle("dark-content");
    }
  }, []);
};
