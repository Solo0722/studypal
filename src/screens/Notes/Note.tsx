import React, { useContext } from "react";
import MainContent from "../../components/MainContent";
import { NavigationProps } from "../../shared/types";
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
      noteId: number;
    };
  }>;
};

const Note = (props: Props) => {
  console.log(props.route.params);

  const { notesState } = useContext(GlobalContext);

  const getNote = (id: string | number) => {
    return notesState.find((note) => note.id.toString() === id.toString());
  };

  const note = getNote(props.route.params.noteId);

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
                  noteId: note.id,
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
        headerTitle: note.title || "Note Title",
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
      <Text>{note.content}</Text>
    </MainContent>
  );
};

export default Note;
