import React from "react";
import { IconButton, VStack } from "native-base";
import QuotesBanner from "./QuotesBanner";
import RecentNotes from "./RecentNotes";
import VirtualizedList from "../../components/VirtualisedList";
import { NavigationProps } from "../../shared/types";
import { useFocusEffect } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import UpcomingClasses from "./UpcomingClasses";

const { CommonStyles } = CONSTANTS;

const Home = (props: NavigationProps) => {
  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              <Iconify
                icon="solar:bell-outline"
                size={18}
                color={theme.FOREGROUND}
                strokeWidth={20}
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
        <UpcomingClasses />
        <RecentNotes />
      </VStack>
    </VirtualizedList>
  );
};

export default Home;
