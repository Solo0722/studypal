import { StyleSheet } from "react-native";
import React from "react";
import MainContent from "../../components/MainContent";
import { Button, Center, Text } from "native-base";
import { theme } from "../../shared/theme";
import { useFocusEffect } from "@react-navigation/native";
import { GlobalContext } from "../../store/context";
import {
  readFromAsyncStorage,
  saveToAsyncStorage,
} from "../../services/storageService";
import { CONSTANTS } from "../../shared/constants";
import {
  getClassesDataFromDB,
  getExamsDataFromDB,
  getNotesDataFromDB,
  getTasksDataFromDB,
} from "../../services/dbServices";
import { NavigationProps } from "../../shared/types";
import NetInfo from "@react-native-community/netinfo";
import Loader from "../../components/Loader";

const SyncPage = (props: NavigationProps) => {
  const { setClassesData, setNotesData, classesState, notesState } =
    React.useContext(GlobalContext);

  const handleInitialise = async () => {
    const user = await readFromAsyncStorage(CONSTANTS.STORAGE_KEYS.USER);
    const internetConnectionAvailable = await NetInfo.fetch().then((state) => {
      return state.isConnected;
    });
    if (user) {
      const classesData = await readFromAsyncStorage(
        CONSTANTS.STORAGE_KEYS.CLASSES
      );
      setClassesData(classesData);

      const notesData = await readFromAsyncStorage(
        CONSTANTS.STORAGE_KEYS.NOTES
      );
      setNotesData(notesData);
      console.log("notesdata: ", notesData);
      console.log("classesData: ", classesData);
      // if (internetConnectionAvailable) {
      //   const classesData = await getClassesDataFromDB(user.id);
      //   const notesData = await getNotesDataFromDB(user.id);
      //   const examsData = await getExamsDataFromDB(user.id);
      //   const tasksData = await getTasksDataFromDB(user.id);

      //   setClassesData(classesData);
      //   setNotesData(notesData);
      //   await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.CLASSES, classesData);
      //   await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.NOTES, notesData);
      // } else {
      //   const classesData = await readFromAsyncStorage(
      //     CONSTANTS.STORAGE_KEYS.CLASSES
      //   );
      //   const notesData = await readFromAsyncStorage(
      //     CONSTANTS.STORAGE_KEYS.NOTES
      //   );
      //   setClassesData(classesData);
      //   setNotesData(notesData);
      // }
      props.navigation.navigate(CONSTANTS.AppPages.MAINPAGES);
    } else {
      props.navigation.navigate(CONSTANTS.AppPages.LOGIN);
    }
  };

  // useFocusEffect(React.useCallback(() => handleInitialise, []));
  React.useEffect(() => {
    handleInitialise();
  }, []);

  return (
    <MainContent>
      <Center w="full" h="full" justifyContent={"center"} alignItems={"center"}>
        <Loader />
      </Center>
    </MainContent>
  );
};

export default SyncPage;

const styles = StyleSheet.create({});
