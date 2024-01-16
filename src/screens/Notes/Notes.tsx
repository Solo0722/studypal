import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, View } from "native-base";
import NoteCard from "./NoteCard";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import FolderCard from "./FolderCard";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { NavigationProps } from "../../shared/types";
import { useFocusEffect } from "@react-navigation/native";
import ListBuilder from "../../components/ListBuilder";

const { AppPages, CommonStyles } = CONSTANTS;

const Notes = (props: NavigationProps) => {
  const [activeFolder, setActiveFolder] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              <Iconify
                icon="solar:magnifer-outline"
                size={18}
                color={theme.FOREGROUND}
                strokeWidth={20}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            onPress={() => props.navigation.navigate(AppPages.NOTE)}
          />
        ),
        headerRightContainerStyle: CommonStyles.headerRightStyle,
      });

      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
        });
      };
    }, [])
  );

  return (
    <View>
      <View w="full" flexDir={"row"} bgColor={theme.BACKGROUND} px="2" py="4">
        <ListBuilder
          data={[...new Array(5)]}
          renderItem={({ index }) => (
            <FolderCard
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
              index={index}
            />
          )}
          ListHeaderComponent={() => (
            <Button
              variant={"unstyled"}
              colorScheme={"coolGray"}
              bgColor={theme.ACCENT}
              size="xs"
              display={"flex"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              _text={{
                color: theme.ACCENT_FOREGROUND,
                fontSize: "xs",
                fontWeight: "normal",
                textAlign: "center",
              }}
              rounded={10}
              // minW={"20"}
              mr={"2"}
              startIcon={
                <Iconify
                  icon="solar:add-circle-outline"
                  size={20}
                  color={theme.FOREGROUND}
                  strokeWidth={20}
                />
              }
            ></Button>
          )}
          ItemSeparatorComponent={() => <View mx="2" />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <ListBuilder
        data={[...new Array(5)]}
        renderItem={({ index }) => (
          <NoteCard orientation={"vertical"} index={index} />
        )}
        ItemSeparatorComponent={() => <View my="2" />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
        px={2}
      />
      <FabButton
        icon={
          <Iconify
            icon="solar:pen-new-square-outline"
            size={24}
            color={theme.FOREGROUND}
            strokeWidth={20}
          />
        }
        onPress={() =>
          props.navigation.navigate(AppPages.CREATEEDITNOTE, { isEdit: false })
        }
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
