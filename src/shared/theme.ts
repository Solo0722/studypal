import { extendTheme } from "native-base";

export const theme = {
  PRIMARY: "#26a59a",
  SECONDARY: "#ef5250",
  BACKGROUND: "#0F0F13",
  FOREGROUND: "#FAFAFA",
  FOREGROUND_2: "#D0D0D0",
  ACCENT_FOREGROUND: "#878787",
  ACCENT: "#151419",
  ACCENT_SECONDARY: "#131317",
  ACCENT_TERTIARY: "#2D2D2F",
  MUTED: "#39393B",
  BORDER: "hsl(240 3.7% 15.9%)",
};

export const nativebaseTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: "Poppins-light",
        italic: "Poppins-light",
      },
      200: {
        normal: "Poppins-light",
        italic: "Poppins-light",
      },
      300: {
        normal: "Poppins-light",
        italic: "Poppins-light",
      },
      400: {
        normal: "Poppins-regular",
        italic: "Poppins-regular",
      },
      500: {
        normal: "Poppins-regular",
        italic: "Poppins-regular",
      },
      600: {
        normal: "Poppins-medium",
        italic: "Poppins-medium",
      },
      700: {
        normal: "Poppins-semibold",
        italic: "Poppins-semibold",
      },
      800: {
        normal: "Poppins-bold",
        italic: "Poppins-bold",
      },
      900: {
        normal: "Poppins-extrabold",
        italic: "Poppins-extrabold",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
});
