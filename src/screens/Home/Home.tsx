import React from "react";
import { IconButton, VStack, View } from "native-base";
import QuotesBanner from "./QuotesBanner";
import RecentNotes from "./RecentNotes";
import VirtualizedList from "../../components/VirtualisedList";
import { NavigationProps } from "../../shared/types";
import { useFocusEffect } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import UpcomingClasses from "./UpcomingClasses";
import { GlobalContext } from "../../store/context";
import { getHomeSummaryData } from "../../services/dataService";
import Loader from "../../components/Loader";

const { CommonStyles, AppPages } = CONSTANTS;

const Home = (props: NavigationProps) => {
  const { classesState, notesState } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(true);
  const [homeSummaryData, setHomeSummaryData] = React.useState({
    upcomingClasses: [],
    recentNotes: [],
  });

  const fetchHomeSummaryData = () => {
    setLoading(true);
    setHomeSummaryData(getHomeSummaryData(classesState, notesState));
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              <Iconify
                icon="solar:bell-outline"
                size={18}
                color={theme.BACKGROUND}
                strokeWidth={20}
                onPress={() => props.navigation.navigate(AppPages.LOGIN)}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            //  onPress={() => props.navigation.navigate(AppPages.NOTE)}
          />
        ),
        headerRightContainerStyle: CommonStyles.headerRightStyle,
      });
      fetchHomeSummaryData();
      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
        });
      };
    }, [])
  );
  return (
    <VirtualizedList>
      <VStack space="6" py="4" px="2" w="full">
        <QuotesBanner />
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              {homeSummaryData.upcomingClasses.length > 0 && (
                <UpcomingClasses />
              )}
              {homeSummaryData.recentNotes.length > 0 && <RecentNotes />}
            </>
          )}
        </>
      </VStack>
    </VirtualizedList>
  );
};

export default Home;
