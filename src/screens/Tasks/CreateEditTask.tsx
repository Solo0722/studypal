import { StyleSheet } from "react-native";
import React from "react";
import {
  FormControl,
  HStack,
  IconButton,
  VStack,
  View,
  useToast,
} from "native-base";
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { TaskData } from "../../shared/types";
import { GlobalContext } from "../../store/context";
import { getRandomColor } from "../../services/uiService";
import { saveToAsyncStorage } from "../../services/storageService";
import moment from "moment";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{
    params: {
      taskData: TaskData | null;
    };
  }>;
};

const CreateEditTask = (props: Props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const isNewTask = !props.route.params.taskData;
  const { createTask, userState, tasksState } = React.useContext(GlobalContext);
  const toast = useToast();
  const getHeaderRightButtons = () => {
    if (isNewTask)
      return (
        <IconButton
          icon={
            <Iconify
              icon="solar:sim-card-minimalistic-outline"
              size={18}
              color={theme.BACKGROUND}
              strokeWidth={20}
            />
          }
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          onPress={addTask}
        />
      );

    return (
      <>
        {isEdit ? (
          <IconButton
            icon={
              <Iconify
                icon="solar:sim-card-minimalistic-outline"
                size={18}
                color={theme.BACKGROUND}
                strokeWidth={20}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
          />
        ) : (
          <IconButton
            icon={
              <Iconify
                icon="solar:pen-new-square-outline"
                size={18}
                color={theme.BACKGROUND}
                strokeWidth={20}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
          />
        )}

        <IconButton
          icon={
            <Iconify
              icon="ion:ellipsis-vertical"
              size={18}
              color={theme.BACKGROUND}
              strokeWidth={20}
            />
          }
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          onPress={() => setIsEdit(!isEdit)}
        />
      </>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerTitle: isNewTask ? "Add Task" : " View or Edit Task",
        headerRight: () => <HStack space="1">{getHeaderRightButtons()}</HStack>,
        headerRightContainerStyle: CONSTANTS.CommonStyles.headerRightStyle,
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

  const addTask = async () => {
    const data: TaskData = {
      id: Math.floor(Math.random() * 1000).toString(),
      color: getRandomColor(),
      userId: userState.uid,
      title: "Do Computer Networking Assignment",
      description: "Assignment 1",
      dueDate: new Date(),
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      progress: 40,
      reminderDate: moment().add(1, "days").toDate(),
      taskType: "assignment",
      taskSteps: [
        {
          id: Math.floor(Math.random() * 1000).toString(),
          title: "Read the assignment",
          isCompleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Math.floor(Math.random() * 1000).toString(),
          title: "Write the assignment",
          isCompleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Math.floor(Math.random() * 1000).toString(),
          title: "Submit the assignment",
          isCompleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    };
    createTask(data);
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.TASKS, [
      ...tasksState,
      data,
    ]).then(() =>
      toast.show({
        title: "Task added",
        colorScheme: "success",
        duration: 2000,
        bgColor: "success.500",
      })
    );
    props.navigation.goBack();
  };
  const updateTaskData = () => {};
  const deleteTask = () => {};

  return (
    <View px="2" py="4">
      <VStack space="4" w="full">
        <FormControl></FormControl>
      </VStack>
    </View>
  );
};

export default CreateEditTask;

const styles = StyleSheet.create({});
