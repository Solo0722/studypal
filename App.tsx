import "react-native-gesture-handler";
import { useEffect } from "react";
import { setCustomTextInput, setCustomText } from "react-native-global-props";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { nativebaseTheme, theme } from "./src/shared/theme";
import RootNavigator from "./src/navigators/RootNavigator";
import { useStatusBar } from "./src/hooks/useStatusBar";
import { useNavigationBar } from "./src/hooks/useNavigationBar";

export default function App() {
  useStatusBar();
  useNavigationBar();
  const [fontsLoaded, error] = useFonts({
    "Poppins-extraLight": require("./src/assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-extraLight-italic": require("./src/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
    "Poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-light-italic": require("./src/assets/fonts/Poppins/Poppins-LightItalic.ttf"),
    "Poppins-regular": require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-regular-italic": require("./src/assets/fonts/Poppins/Poppins-Italic.ttf"),
    "Poppins-medium": require("./src/assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-medium-italic": require("./src/assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    "Poppins-semibold": require("./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-semibold-italic": require("./src/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
    "Poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-bold-italic": require("./src/assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "Poppins-extrabold": require("./src/assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-extrabold-italic": require("./src/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  setCustomText({
    style: {
      fontFamily: "Poppins-regular",
      color: `${theme.FOREGROUND}`,
    },
  });

  setCustomTextInput({ style: { fontFamily: "Poppins-regular" } });

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: theme.BACKGROUND,
          text: theme.FOREGROUND,
          primary: theme.PRIMARY,
          border: theme.BORDER,
          card: theme.ACCENT,
          notification: theme.BACKGROUND,
        },
      }}
    >
      <NativeBaseProvider theme={nativebaseTheme}>
        <RootNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
