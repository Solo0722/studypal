import React, { useContext, useState } from "react";
import { HStack, IconButton, Input, useToast } from "native-base";
import { Iconify } from "react-native-iconify";
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from "@react-navigation/native";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import MainContent from "../../components/MainContent";
import RichTextEditor from "./RichTextEditor";
import { GlobalContext } from "../../store/context";
import uuid from "uuid";
import { Note } from "../../shared/types";
import { saveToAsyncStorage } from "../../services/storageService";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{
    params: {
      noteId?: number;
      isEdit: boolean;
    };
  }>;
};

const CreateEditNote = (props: Props) => {
  const { notesState, createNote, updateNote, userState } =
    useContext(GlobalContext);
  const isEditNote = props.route.params.isEdit;
  const toast = useToast();
  const getNote = (id: number | string) => {
    return notesState.find((note) => note.id.toString() === id.toString());
  };

  const note = isEditNote ? getNote(props.route.params.noteId) : null;

  const [noteData, setNoteData] = useState(
    isEditNote
      ? note
      : {
          id: null,
          title: "",
          content: null,
          updatedAt: null,
          createdAt: null,
          attachments: [],
        }
  );

  const onSaveNote = async () => {
    const newNote: Note = {
      id: Math.floor(Math.random() * 1000),
      title: noteData.title || "",
      content: noteData.content || "",
      updatedAt: new Date(),
      createdAt: new Date(),
      attachments: noteData.attachments || [],
      userId: userState.email,
    };

    isEditNote ? updateNote({ ...note, ...noteData }) : createNote(newNote);
    console.log("saved");
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.NOTES, notesState).then(
      () =>
        toast.show({
          title: "Note Saved",
          colorScheme: "success",
        })
    );
  };

  const renderNoteTitleInput = () => (
    <Input
      placeholder="Note Title"
      value={noteData.title}
      onChangeText={(e) => setNoteData({ ...noteData, title: e })}
    />
  );

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <HStack space="1">
            <IconButton
              icon={
                <Iconify
                  icon="solar:sim-card-minimalistic-outline"
                  size={18}
                  color={theme.FOREGROUND}
                  strokeWidth={20}
                />
              }
              variant={"ghost"}
              colorScheme={"coolGray"}
              rounded={"full"}
              onPress={onSaveNote}
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
        headerTitle: props.route.params.isEdit ? note.title : "Note Title",
      });

      // return () => {
      //   props.navigation.setOptions({
      //     headerRight: undefined,
      //     headerTitle: undefined,
      //     headerRightContainerStyle: undefined,
      //   });
      // };
    }, [])
  );

  return (
    <MainContent>
      {renderNoteTitleInput()}
      <RichTextEditor
        noteContent={noteData.content}
        setNoteContent={(e) => setNoteData({ ...noteData, content: e })}
      />
    </MainContent>
  );
};

export default CreateEditNote;
