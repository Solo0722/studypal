import { extendTheme } from "native-base";

export const theme = {
  PRIMARY: "#1a2238",
  SECONDARY: "#ef5250",
  BACKGROUND: "#f8f8ff",
  FOREGROUND: "#0a0c13",
  FOREGROUND_2: "#333333",
  ACCENT_FOREGROUND: "#dbdce0",
  ACCENT: "#55596c",
  ACCENT_SECONDARY: "#131317",
  ACCENT_TERTIARY: "#4D5265",
  MUTED: "#39393B",
  BORDER: "hsl(240 3.7% 15.9%)",
};

export const nativebaseTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fontConfig: {
    Urbanist: {
      100: {
        normal: "Urbanist-light",
        italic: "Urbanist-light",
      },
      200: {
        normal: "Urbanist-light",
        italic: "Urbanist-light",
      },
      300: {
        normal: "Urbanist-light",
        italic: "Urbanist-light",
      },
      400: {
        normal: "Urbanist-regular",
        italic: "Urbanist-regular",
      },
      500: {
        normal: "Urbanist-regular",
        italic: "Urbanist-regular",
      },
      600: {
        normal: "Urbanist-medium",
        italic: "Urbanist-medium",
      },
      700: {
        normal: "Urbanist-semibold",
        italic: "Urbanist-semibold",
      },
      800: {
        normal: "Urbanist-bold",
        italic: "Urbanist-bold",
      },
      900: {
        normal: "Urbanist-extrabold",
        italic: "Urbanist-extrabold",
      },
    },
  },
  fonts: {
    heading: "Urbanist",
    body: "Urbanist",
    mono: "Urbanist",
  },
});
