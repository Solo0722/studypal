import { Platform } from "react-native";
import { theme } from "../../../shared/theme";
import { Theme } from "react-native-calendars/src/types";

export const themeColor = theme.SECONDARY;

export function getTheme(): Theme {
  const disabledColor = "grey";

  return {
    // arrows
    arrowColor: theme.ACCENT_FOREGROUND,
    arrowStyle: { padding: 0 },
    // knob
    // expandableKnobColor: "darkgrey",
    // month
    monthTextColor: theme.FOREGROUND,
    textMonthFontSize: 16,
    textMonthFontFamily: "Urbanist-regular",
    textMonthFontWeight: "bold" as const,
    // day names
    textSectionTitleColor: theme.FOREGROUND,
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: "Urbanist-regular",
    textDayHeaderFontWeight: "normal" as const,
    // dates
    dayTextColor: theme.FOREGROUND_2,
    todayTextColor: themeColor,
    textDayFontSize: 10,
    textDayFontFamily: "Urbanist-regular",
    textDayFontWeight: "500" as const,
    textDayStyle: { marginTop: Platform.OS === "android" ? 2 : 4 },
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: "white",
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: "white",
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -2 },
    calendarBackground: theme.ACCENT,
    backgroundColor: theme.ACCENT,
  };
}
