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
import { Note as NoteData } from "../../shared/types";
import { saveToAsyncStorage } from "../../services/storageService";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{
    params: {
      noteData: NoteData | null;
    };
  }>;
};

const CreateEditNote = (props: Props) => {
  const { notesState, createNote, updateNote, userState } =
    useContext(GlobalContext);
  const isNewNote = !props.route.params.noteData;
  const noteData = props.route.params.noteData;
  const toast = useToast();

  const [noteFormData, setNoteFormData] = useState(
    isNewNote
      ? {
          title: "",
          content: null,
          attachments: [],
          category: "Personal",
        }
      : {
          title: noteData.title,
          content: noteData.content,
          attachments: noteData.attachments,
          category: noteData.category,
        }
  );

  const onAddNote = async () => {
    const newNote: NoteData = {
      id: Math.floor(Math.random() * 1000).toString(),
      title: noteFormData.title || "",
      content: noteFormData.content || "",
      updatedAt: new Date(),
      createdAt: new Date(),
      attachments: noteFormData.attachments || [],
      userId: userState.uid,
    };
    createNote(newNote);
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.NOTES, [
      ...notesState,
      newNote,
    ]).then(() =>
      toast.show({
        title: "Note Added",
        colorScheme: "success",
      })
    );
    props.navigation.goBack();
  };

  const onUpdateNote = async () => {
    const updatedNote: NoteData = {
      id: noteData.id,
      title: noteFormData.title || noteData.title,
      content: noteFormData.content || noteData.content,
      updatedAt: new Date(),
      createdAt: noteData.createdAt,
      attachments: noteFormData.attachments || [],
      userId: userState.uid,
    };

    updateNote({
      ...noteData,
      ...updatedNote,
    });
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.NOTES, notesState).then(
      () =>
        toast.show({
          title: "Note Updated",
          colorScheme: "success",
        })
    );
    props.navigation.goBack();
  };

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
              onPress={() => (isNewNote ? onAddNote() : onUpdateNote())}
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
        headerTitle: isNewNote ? "Add new note" : noteData.title,
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

  const renderNoteTitleInput = () => (
    <Input
      placeholder="Note Title"
      defaultValue={noteFormData.title}
      onChangeText={(e) => setNoteFormData({ ...noteFormData, title: e })}
    />
  );

  return (
    <MainContent>
      {renderNoteTitleInput()}
      {/* <RichTextEditor
        noteContent={noteFormData?.content || ""}
        setNoteContent={(e) => setNoteFormData({ ...noteFormData, content: e })}
      /> */}
    </MainContent>
  );
};

export default CreateEditNote;
