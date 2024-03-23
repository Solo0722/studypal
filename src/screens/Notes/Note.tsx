import React, { useContext } from "react";
import MainContent from "../../components/MainContent";
import { NavigationProps, Note as NoteData } from "../../shared/types";
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from "@react-navigation/native";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { Iconify } from "react-native-iconify";
import { HStack, IconButton, Text } from "native-base";
import RichTextEditor from "./RichTextEditor";
import { GlobalContext } from "../../store/context";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{
    params: {
      noteData: NoteData | null;
    };
  }>;
};

const Note = (props: Props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const isNewNote = !props.route.params.noteData;
  const { createNote, userState, notesState } = React.useContext(GlobalContext);
  const noteData = props.route.params.noteData;

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
                  noteData,
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
        headerTitle: noteData.title,
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
      <Text>{noteData?.content}</Text>
    </MainContent>
  );
};

export default Note;
