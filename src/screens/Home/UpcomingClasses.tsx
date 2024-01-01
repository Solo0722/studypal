import React from "react";
import ListBuilder from "../../components/ListBuilder";
import { View } from "native-base";
import ClassCard from "../Classes/ClassCard";

const UpcomingClasses = () => {
  return (
    <ListBuilder
      data={new Array(2)}
      renderItem={({ index }) => (
        <ClassCard orientation={"vertical"} index={index} />
      )}
      ItemSeparatorComponent={() => <View my="2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 150 }}
      showListTitle
      listTitle={"Upcoming Classes"}
    />
  );
};

export default UpcomingClasses;
