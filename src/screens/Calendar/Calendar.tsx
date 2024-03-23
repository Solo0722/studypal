import React from "react";
import MainContent from "../../components/MainContent";
import AgendaCalendar from "./AgendaCalendar";
import { IconButton, View } from "native-base";
import TimelineCalendar from "./TimelineCalendar";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationProps } from "../../shared/types";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { GlobalContext } from "../../store/context";

const Calendar = (props: NavigationProps) => {
  const [isAgendaCalendar, setIsAgendaCalendar] = React.useState(true);
  const { notesState, classesState } = React.useContext(GlobalContext);
  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              isAgendaCalendar ? (
                <Iconify
                  icon="solar:align-left-outline"
                  size={18}
                  color={theme.BACKGROUND}
                  strokeWidth={20}
                />
              ) : (
                <Iconify
                  icon="solar:align-vertical-spacing-bold"
                  size={18}
                  color={theme.BACKGROUND}
                  strokeWidth={20}
                />
              )
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            onPress={() => setIsAgendaCalendar(!isAgendaCalendar)}
          />
        ),
        headerRightContainerStyle: CONSTANTS.CommonStyles.headerRightStyle,
      });

      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
        });
      };
    }, [])
  );

  return (
    <MainContent>
      <View w="full" h="full" flex={1} pt="4">
        {isAgendaCalendar ? (
          <AgendaCalendar notes={notesState} classes={classesState} />
        ) : (
          <TimelineCalendar />
        )}
      </View>
    </MainContent>
  );
};

export default Calendar;
