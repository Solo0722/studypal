import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Icon,
  IconButton,
  Text,
  VStack,
  View,
} from "native-base";
import NoteCard from "./NoteCard";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import FolderCard from "./FolderCard";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { NavigationProps } from "../../shared/types";

const { AppPages } = CONSTANTS;

const Notes = (props: NavigationProps) => {
  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <View>
      <View
        w="full"
        flexDir={"row"}
        bgColor={theme.BACKGROUND}
        px="2"
        py="4"
        shadow="2"
        // mb="2"
      >
        <FlatList
          horizontal
          data={[...new Array(5)]}
          renderItem={(props) => (
            <FolderCard
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
              {...props}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View mx="2" />}
        />
      </View>
      <FlatList
        pb="4"
        px="2"
        data={[...new Array(5)]}
        // ListHeaderComponent={() => (
        //   <View w="full" flexDir={"row"} justifyContent={"flex-end"}>
        //     <Text>Sort by</Text>
        //   </View>
        // )}
        renderItem={({ index }) => (
          <NoteCard orientation={"vertical"} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View my="2" />}
        contentContainerStyle={{ paddingBottom: 50 }}
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
        onPress={() => props.navigation.navigate(AppPages.HOME)}
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
