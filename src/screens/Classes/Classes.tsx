import React from "react";
import ClassCard from "./ClassCard";
import ListBuilder from "../../components/ListBuilder";
import { View } from "native-base";
import { theme } from "../../shared/theme";
import VirtualizedList from "../../components/VirtualisedList";

const Classes = () => {
  return (
    <VirtualizedList>
      <ListBuilder
        data={new Array(10)}
        renderItem={({ index }) => (
          <ClassCard orientation={"vertical"} index={index} />
        )}
        ItemSeparatorComponent={() => <View my="2" />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
        showListTitle
        listTitle={"Upcoming Classes"}
      />
    </VirtualizedList>
  );
};

export default Classes;
