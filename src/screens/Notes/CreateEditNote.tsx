import React, { useState } from "react";
import { HStack, IconButton } from "native-base";
import { Iconify } from "react-native-iconify";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { NavigationProps } from "../../shared/types";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import MainContent from "../../components/MainContent";
import RichTextEditor from "./RichTextEditor";

const CreateEditNote = (props: NavigationProps) => {
  const { params } = useRoute();
  const [noteContent, setNoteContent] = useState(params?.note.content);

  console.log(params);
  console.log(noteContent);

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
              //  onPress={() => props.navigation.navigate(AppPages.NOTE)}
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
        headerTitle: params?.isEdit ? params?.note.title : "Note Title",
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
      <RichTextEditor
        noteContent={noteContent}
        setNoteContent={setNoteContent}
      />
    </MainContent>
  );
};

export default CreateEditNote;
