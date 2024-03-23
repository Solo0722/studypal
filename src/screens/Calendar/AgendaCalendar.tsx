import React, { useRef, useCallback } from "react";
import { StyleSheet } from "react-native";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
  AgendaListProps,
} from "react-native-calendars";
import {
  agendaItems,
  getAgendaItems,
  getMarkedDates,
} from "./helpers/agendaItems";
import AgendaItem from "./AgendaItem";
import { getTheme, themeColor } from "./helpers/theme";
import testIDs from "./helpers/testIDs";
import { theme } from "../../shared/theme";
import ClassCard from "../Classes/ClassCard";
import { ClassData, Note } from "../../shared/types";

interface Props {
  weekView?: boolean;
  notes?: Note[];
  classes?: ClassData[];
}

const AgendaCalendar = (props: Props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const calendarTheme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const ITEMS: any[] = getAgendaItems(props.classes, props.notes);

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('AgendaCalendar onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('AgendaCalendar onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({ item, index }: any) => {
    console.log("item: ", item);
    return <ClassCard orientation="vertical" index={index} />;
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
      theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      {weekView ? (
        <WeekCalendar
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
          markedDates={marked.current}
          style={{ borderRadius: 10 }}
        />
      ) : (
        <ExpandableCalendar
          testID={testIDs.expandableCalendar.CONTAINER}
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          theme={calendarTheme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
          //   leftArrowImageSource={leftArrowIcon}
          //   rightArrowImageSource={rightArrowIcon}
          // animateScroll
          // closeOnDayPress={false}
          style={{ borderRadius: 10 }}
        />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
  );
};

export default AgendaCalendar;

const styles = StyleSheet.create({
  calendar: {
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  header: {
    backgroundColor: "lightgrey",
  },
  section: {
    backgroundColor: theme.BACKGROUND,
    color: theme.ACCENT_FOREGROUND,
    textTransform: "capitalize",
  },
});
