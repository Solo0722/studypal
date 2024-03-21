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
import GlobalProvider from "./src/store/context";

export default function App() {
  useStatusBar();
  useNavigationBar();
  const [fontsLoaded, error] = useFonts({
    "Urbanist-extraLight": require("./src/assets/fonts/Urbanist/Urbanist-ExtraLight.ttf"),
    "Urbanist-extraLight-italic": require("./src/assets/fonts/Urbanist/Urbanist-ExtraLightItalic.ttf"),
    "Urbanist-light": require("./src/assets/fonts/Urbanist/Urbanist-Light.ttf"),
    "Urbanist-light-italic": require("./src/assets/fonts/Urbanist/Urbanist-LightItalic.ttf"),
    "Urbanist-regular": require("./src/assets/fonts/Urbanist/Urbanist-Regular.ttf"),
    "Urbanist-regular-italic": require("./src/assets/fonts/Urbanist/Urbanist-Italic.ttf"),
    "Urbanist-medium": require("./src/assets/fonts/Urbanist/Urbanist-Medium.ttf"),
    "Urbanist-medium-italic": require("./src/assets/fonts/Urbanist/Urbanist-MediumItalic.ttf"),
    "Urbanist-semibold": require("./src/assets/fonts/Urbanist/Urbanist-SemiBold.ttf"),
    "Urbanist-semibold-italic": require("./src/assets/fonts/Urbanist/Urbanist-SemiBoldItalic.ttf"),
    "Urbanist-bold": require("./src/assets/fonts/Urbanist/Urbanist-Bold.ttf"),
    "Urbanist-bold-italic": require("./src/assets/fonts/Urbanist/Urbanist-BoldItalic.ttf"),
    "Urbanist-extrabold": require("./src/assets/fonts/Urbanist/Urbanist-ExtraBold.ttf"),
    "Urbanist-extrabold-italic": require("./src/assets/fonts/Urbanist/Urbanist-ExtraBoldItalic.ttf"),
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
      fontFamily: "Urbanist-regular",
      color: `${theme.FOREGROUND}`,
    },
  });

  setCustomTextInput({ style: { fontFamily: "Urbanist-regular" } });

  return (
    <NavigationContainer
      theme={{
        dark: false,
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
      <GlobalProvider>
        <NativeBaseProvider theme={nativebaseTheme}>
          <RootNavigator />
        </NativeBaseProvider>
      </GlobalProvider>
    </NavigationContainer>
  );
}
