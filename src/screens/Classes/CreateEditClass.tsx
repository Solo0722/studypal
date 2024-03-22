import { StyleSheet } from "react-native";
import React from "react";
import { FormControl, HStack, IconButton, VStack, View } from "native-base";
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { ClassData } from "../../shared/types";

const things = [
  "subject",
  "module",
  "building",
  "room",
  "lecturer/teacher",
  "repeats",
  "start/end date",
  "time duration",
  "date duration",
];

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
  const isNewClass = !!props.route.params.classData;

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerTitle: isNewClass ? "View or Edit Class" : "Add Class",
        headerRight: () => (
          <HStack space="1">
            <IconButton
              icon={
                isEdit ? (
                  <Iconify
                    icon="solar:sim-card-minimalistic-outline"
                    size={18}
                    color={theme.BACKGROUND}
                    strokeWidth={20}
                  />
                ) : (
                  <Iconify
                    icon="solar:pen-new-square-outline"
                    size={18}
                    color={theme.BACKGROUND}
                    strokeWidth={20}
                  />
                )
              }
              variant={"ghost"}
              colorScheme={"coolGray"}
              rounded={"full"}
            />
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
              //  onPress={() => props.navigation.navigate(AppPages.NOTE)}
            />
          </HStack>
        ),
        headerRightContainerStyle: CONSTANTS.CommonStyles.headerRightStyle,
        // headerTitle: props.route.params.isEdit ? note.title : "Note Title",
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
    <View px="2" py="4">
      <VStack space="4" w="full">
        <FormControl></FormControl>
      </VStack>
    </View>
  );
};

export default CreateEditClass;

const styles = StyleSheet.create({});
