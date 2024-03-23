import React from "react";
import VirtualizedList from "../../components/VirtualisedList";
import ListBuilder from "../../components/ListBuilder";
import TaskCard from "./TaskCard";
import { IconButton, VStack, View } from "native-base";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationProps } from "../../shared/types";
import { CONSTANTS } from "../../shared/constants";
import { GlobalContext } from "../../store/context";
import isEmpty from "lodash/isEmpty";
import Empty from "../../components/Empty";

const Tasks = (props: NavigationProps) => {
  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              <Iconify
                icon="solar:magnifer-outline"
                size={18}
                color={theme.BACKGROUND}
                strokeWidth={20}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            // onPress={() => props.navigation.navigate(AppPages.NOTE)}
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

  const { tasksState } = React.useContext(GlobalContext);

  const renderContent = () => {
    if (isEmpty(tasksState)) return <Empty />;
    return (
      <VStack space="6" py="4" px="2" w="full">
        <ListBuilder
          data={tasksState}
          renderItem={({ index, item }) => (
            <TaskCard index={index} item={item} />
          )}
          ItemSeparatorComponent={() => <View my="2" />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </VStack>
    );
  };

  return (
    <>
      <VirtualizedList>{renderContent()}</VirtualizedList>
      <FabButton
        bottom={10}
        icon={
          <Iconify
            icon="solar:pen-new-square-outline"
            size={24}
            color={theme.BACKGROUND}
            strokeWidth={20}
          />
        }
        onPress={() =>
          props.navigation.navigate(CONSTANTS.AppPages.CREATEEDITTASK, {
            taskData: null,
          })
        }
      />
    </>
  );
};

export default Tasks;
