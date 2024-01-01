import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Heading, Text, VStack, View } from "native-base";
import NoteCard from "../Notes/NoteCard";
import { theme } from "../../shared/theme";
import ListBuilder from "../../components/ListBuilder";

const RecentNotes = () => {
  return (
    <ListBuilder
      data={[...new Array(2)]}
      renderItem={({ index }) => (
        <NoteCard orientation={"vertical"} index={index} />
      )}
      ItemSeparatorComponent={() => <View my="2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 150 }}
      showListTitle
      listTitle={"Recent Notes"}
    />
  );
};

export default RecentNotes;

const styles = StyleSheet.create({});
