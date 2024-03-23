import React from "react";
import ClassCard from "./ClassCard";
import ListBuilder from "../../components/ListBuilder";
import { IconButton, VStack, View } from "native-base";
import { theme } from "../../shared/theme";
import VirtualizedList from "../../components/VirtualisedList";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import { NavigationProps } from "../../shared/types";
import { CONSTANTS } from "../../shared/constants";
import { GlobalContext } from "../../store/context";
import { useFocusEffect } from "@react-navigation/native";

const Classes = (props: NavigationProps) => {
  const { classesState } = React.useContext(GlobalContext);

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

  return (
    <>
      <VirtualizedList>
        <VStack space="6" py="4" px="2" w="full">
          <ListBuilder
            data={classesState}
            renderItem={({ index, item }) => (
              <ClassCard orientation={"vertical"} index={index} item={item} />
            )}
            ItemSeparatorComponent={() => <View my="2" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
          />
        </VStack>
      </VirtualizedList>
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
          props.navigation.navigate(CONSTANTS.AppPages.CREATEEDITCLASS, {
            classData: null,
          })
        }
      />
    </>
  );
};

export default Classes;
