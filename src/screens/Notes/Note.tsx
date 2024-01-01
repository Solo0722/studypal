import React from "react";
import MainContent from "../../components/MainContent";
import { NavigationProps } from "../../shared/types";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { Iconify } from "react-native-iconify";
import { HStack, IconButton, Text } from "native-base";
import RichTextEditor from "./RichTextEditor";

const Note = (props: NavigationProps) => {
  const { params } = useRoute();

  console.log(params);

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <HStack space="1">
            <IconButton
              icon={
                <Iconify
                  icon="solar:pen-new-square-outline"
                  size={18}
                  color={theme.FOREGROUND}
                  strokeWidth={20}
                />
              }
              variant={"ghost"}
              colorScheme={"coolGray"}
              rounded={"full"}
              onPress={() =>
                props.navigation.navigate(CONSTANTS.AppPages.CREATEEDITNOTE, {
                  note: params?.note,
                  isEdit: true,
                })
              }
            />
            <IconButton
              icon={
                <Iconify
                  icon="ion:ellipsis-vertical"
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
          </HStack>
        ),
        headerRightContainerStyle: CONSTANTS.CommonStyles.headerRightStyle,
        headerTitle: params?.note.title || "Note Title",
      });

      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
          headerTitle: undefined,
          headerRightContainerStyle: undefined,
        });
      };
    }, [])
  );

  return (
    <MainContent>
      {/* <RichTextEditor /> */}
      <Text>{params?.note.content}</Text>
    </MainContent>
  );
};

export default Note;
