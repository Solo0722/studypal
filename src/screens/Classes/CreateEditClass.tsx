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
import { ClassData } from "../../shared/types";
import { getHomeSummaryData } from "../../services/dataService";
import { GlobalContext } from "../../store/context";
import { getRandomColor } from "../../services/uiService";
import {
  readFromAsyncStorage,
  saveToAsyncStorage,
} from "../../services/storageService";
import moment from "moment";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{
    params: {
      classData: ClassData | null;
    };
  }>;
};

const CreateEditClass = (props: Props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const isNewClass = !props.route.params.classData;
  const { createClass, userState, classesState } =
    React.useContext(GlobalContext);
  const toast = useToast();
  const getHeaderRightButtons = () => {
    if (isNewClass)
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
          onPress={addClass}
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
        headerTitle: isNewClass ? "Add Class" : " View or Edit Class",
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

  const addClass = async () => {
    const data: ClassData = {
      id: Math.floor(Math.random() * 1000).toString(),
      color: getRandomColor(),
      userId: userState.uid,
      subject: "Algebra",
      module: "I",
      building: "Petroleum Building",
      room: "Room 219",
      tutor: "Dr. Ezearn Dadzie",
      repeat: true,
      startDate: moment().subtract(5, "days").toDate(),
      endDate: moment().add(5, "days").toDate(),
      timeDurations: [
        {
          Monday: {
            startTime: moment().add(2, "hours").toDate(),
            endTime: moment().add(5, "hours").toDate(),
          },
        },
        {
          Wednesday: {
            startTime: moment().add(5, "hours").toDate(),
            endTime: moment().add(7, "hours").toDate(),
          },
        },
      ],
    };
    createClass(data);
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.CLASSES, [
      ...classesState,
      data,
    ]).then(() =>
      toast.show({
        title: "Class added",
        colorScheme: "success",
        duration: 2000,
        bgColor: "success.500",
      })
    );
    props.navigation.goBack();
  };
  const updateClassData = () => {};
  const deleteClass = () => {};

  return (
    <View px="2" py="4">
      <VStack space="4" w="full">
        <FormControl></FormControl>
      </VStack>
    </View>
  );
};

export default CreateEditClass;

const styles = StyleSheet.create({});
