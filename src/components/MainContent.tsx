import { View } from "native-base";
import React from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <View px="2" flex={1} w="full" h="full">
      {children}
    </View>
  );
};

export default MainContent;
