import React from "react";
import VirtualizedList from "../../components/VirtualisedList";
import ListBuilder from "../../components/ListBuilder";
import TaskCard from "./TaskCard";
import { View } from "native-base";

const Tasks = () => {
  return (
    <VirtualizedList>
      <ListBuilder
        data={new Array(10)}
        renderItem={({ index }) => (
          <TaskCard orientation={"vertical"} index={index} />
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

export default Tasks;
