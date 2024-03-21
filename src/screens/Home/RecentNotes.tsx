import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FlatList, Heading, Text, VStack, View } from "native-base";
import NoteCard from "../Notes/NoteCard";
import { theme } from "../../shared/theme";
import ListBuilder from "../../components/ListBuilder";
import { GlobalContext } from "../../store/context";
import Empty from "../../components/Empty";
import isEmpty from "lodash";

const RecentNotes = () => {
  const { notesState } = useContext(GlobalContext);

  if (isEmpty(notesState)) return <Empty />;

  return (
    <ListBuilder
      data={notesState.slice(0, 2)}
      renderItem={({ item }) => (
        <NoteCard orientation={"vertical"} item={item} />
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
