import React from "react";
import ClassCard from "./ClassCard";
import ListBuilder from "../../components/ListBuilder";
import { VStack, View } from "native-base";
import { theme } from "../../shared/theme";
import VirtualizedList from "../../components/VirtualisedList";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import { NavigationProps } from "../../shared/types";
import { CONSTANTS } from "../../shared/constants";

const Classes = (props: NavigationProps) => {
  return (
    <VirtualizedList>
      <VStack space="6" py="4" px="2" w="full">
        <ListBuilder
          data={new Array(10)}
          renderItem={({ index }) => (
            <ClassCard orientation={"vertical"} index={index} />
          )}
          ItemSeparatorComponent={() => <View my="2" />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </VStack>
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
          props.navigation.navigate(CONSTANTS.AppPages.CREATECLASS)
        }
      />
    </VirtualizedList>
  );
};

export default Classes;
