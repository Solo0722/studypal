import React from "react";
import MainContent from "../../components/MainContent";
import AgendaCalendar from "./AgendaCalendar";
import { View } from "native-base";
import TimelineCalendar from "./TimelineCalendar";

const Calendar = () => {
  return (
    <MainContent>
      <View w="full" h="full" flex={1} pt="4">
        {/* <TimelineCalendar /> */}
        <AgendaCalendar />
      </View>
    </MainContent>
  );
};

export default Calendar;
