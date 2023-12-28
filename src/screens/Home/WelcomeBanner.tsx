import React from "react";
import { HStack, Heading, Text, VStack } from "native-base";
import { Iconify } from "react-native-iconify";
import { format } from "date-fns";
import { theme } from "../../shared/theme";

const WelcomeBanner = () => {
  return (
    <HStack space="4" alignItems={"center"}>
      <Iconify
        icon="solar:calendar-bold"
        size={30}
        color={theme.FOREGROUND}
        strokeWidth={20}
      />
      <VStack space="1">
        <Text
          fontSize={12}
          color={theme.ACCENT_FOREGROUND}
          fontWeight="semibold"
        >
          {format(new Date(), "do MMMM yyyy")}
        </Text>
        <Heading fontSize={13}>Welcome back, Solomon</Heading>
      </VStack>
    </HStack>
  );
};

export default WelcomeBanner;
