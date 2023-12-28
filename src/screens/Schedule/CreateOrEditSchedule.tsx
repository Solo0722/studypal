import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import TabHeader from "../../components/TabHeader";
import { Button, IconButton } from "native-base";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { capitalize, startCase, upperCase } from "lodash";

const CreateOrEditSchedule = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const formatScheduleType = (scheduleType) => {
    if (scheduleType === "classes") return "class";
    else if (scheduleType === "exams") return "exam";
    else if (scheduleType === "tasks") return "task";
    else return "";
  };

  return (
    <ScreenWrapper
      header={
        <TabHeader
          title={startCase(`New ${formatScheduleType(params.scheduleType)}`)}
          showBackBtn
          rightComponents={[
            {
              component: (
                <Button
                  size="sm"
                  rounded={"lg"}
                  bgColor={"success.400"}
                  colorScheme={"success"}
                >
                  Save
                </Button>
              ),
            },
          ]}
        />
      }
    >
      <Text>CreateNote</Text>
    </ScreenWrapper>
  );
};

export default CreateOrEditSchedule;

const styles = StyleSheet.create({});
