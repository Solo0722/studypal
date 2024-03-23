import React from "react";
import ListBuilder from "../../components/ListBuilder";
import { View } from "native-base";
import ClassCard from "../Classes/ClassCard";
import { theme } from "../../shared/theme";
import { ClassData } from "../../shared/types";

type Props = {
  upcomingClasses: ClassData[];
};

const UpcomingClasses = (props: Props) => {
  return (
    <ListBuilder
      data={props.upcomingClasses}
      renderItem={({ item, index }) => (
        <ClassCard orientation={"vertical"} index={index} item={item} />
      )}
      ItemSeparatorComponent={() => <View my="2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 150 }}
      showListTitle
      listTitle={"Upcoming Classes"}
      listTitleColor={theme.SECONDARY}
    />
  );
};

export default UpcomingClasses;
