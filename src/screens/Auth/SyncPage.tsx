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

const SyncPage = (props: NavigationProps) => {
  const { setClassesData, setNotesData } = React.useContext(GlobalContext);

  const internetConnectionAvailable = true; //dummy variable

  const handleInitialise = async () => {
    const user = await readFromAsyncStorage(CONSTANTS.STORAGE_KEYS.USER);
    if (user) {
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
      console.log("User here...");
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
      <Center justifyContent={"center"} alignItems={"center"}>
        <Text color={theme.FOREGROUND}>Loading your data...</Text>
        <Button>Hello</Button>
      </Center>
    </MainContent>
  );
};

export default SyncPage;

const styles = StyleSheet.create({});
