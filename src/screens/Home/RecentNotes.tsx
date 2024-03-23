import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FlatList, Heading, Text, VStack, View } from "native-base";
import NoteCard from "../Notes/NoteCard";
import { theme } from "../../shared/theme";
import ListBuilder from "../../components/ListBuilder";
import { GlobalContext } from "../../store/context";
import Empty from "../../components/Empty";
import isEmpty from "lodash";
import { Note } from "../../shared/types";

type Props = {
  recentNotes: Note[];
};

const RecentNotes = (props: Props) => {
  return (
    <ListBuilder
      data={props.recentNotes}
      renderItem={({ item, index }) => (
        <NoteCard orientation={"vertical"} item={item} index={index} />
      )}
      ItemSeparatorComponent={() => <View my="2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 150 }}
      showListTitle
      listTitle={"Recent Notes"}
      listTitleColor={theme.SECONDARY}
      numColumns={2}
      columnWrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    />
  );
};

export default RecentNotes;

const styles = StyleSheet.create({});
