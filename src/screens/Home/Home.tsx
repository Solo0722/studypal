import React from "react";
import { VStack } from "native-base";
import WelcomeBanner from "./WelcomeBanner";
import QuotesBanner from "./QuotesBanner";
import RecentNotes from "./RecentNotes";
import VirtualizedList from "../../components/VirtualisedList";

const Home = () => {
  return (
    <VirtualizedList>
      <VStack space="2" px="2" py="4">
        {/* <WelcomeBanner /> */}
        {/* <QuotesBanner />
        <RecentNotes /> */}
      </VStack>
    </VirtualizedList>
  );
};

export default Home;
