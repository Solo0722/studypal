import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import TabHeader from "../../components/TabHeader";
import { IconButton } from "native-base";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";

const CreateEditNote = () => {
  return (
    <ScreenWrapper
      header={
        <TabHeader
          title={"New note"}
          showBackBtn
          rightComponents={[
            {
              component: (
                <IconButton
                  size="sm"
                  rounded={"lg"}
                  bgColor={darkTheme.accentColor1}
                  _pressed={{
                    bgColor: darkTheme.accentColor3,
                  }}
                  icon={
                    <Iconify
                      icon="solar:paperclip-outline"
                      size={18}
                      color={darkTheme.lightGrayColor}
                      strokeWidth={18}
                    />
                  }
                />
              ),
            },
            {
              component: (
                <IconButton
                  size="sm"
                  rounded={"lg"}
                  bgColor={darkTheme.accentColor1}
                  _pressed={{
                    bgColor: darkTheme.accentColor3,
                  }}
                  icon={
                    <Iconify
                      icon="solar:menu-dots-bold"
                      size={18}
                      color={darkTheme.lightGrayColor}
                      strokeWidth={18}
                    />
                  }
                />
              ),
            },
          ]}
        />
      }
    >
      <Text>CreateEditNote</Text>
    </ScreenWrapper>
  );
};

export default CreateEditNote;

const styles = StyleSheet.create({});
