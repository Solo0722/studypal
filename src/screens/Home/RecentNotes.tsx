import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Heading, VStack, View } from "native-base";
import NoteCard from "../Notes/NoteCard";

const RecentNotes = () => {
  return (
    <VStack>
      <FlatList
        data={[...new Array(2)]}
        ListHeaderComponent={() => (
          <View w="full" flexDir={"row"} justifyContent={"flex-start"} mb="2">
            <Heading fontSize={13}>Recent Notes</Heading>
          </View>
        )}
        renderItem={({ index }) => (
          <NoteCard orientation={"vertical"} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View my="2" />}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </VStack>
  );
};

export default RecentNotes;

const styles = StyleSheet.create({});
