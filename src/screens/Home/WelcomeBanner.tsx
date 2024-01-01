import React from "react";
import { Avatar, HStack, Heading, Text, VStack } from "native-base";
import { Iconify } from "react-native-iconify";
import { format } from "date-fns";
import { theme } from "../../shared/theme";

const WelcomeBanner = () => {
  return (
    <HStack space="4" alignItems={"center"}>
      {/* <Iconify
        icon="solar:calendar-bold"
        size={30}
        color={theme.FOREGROUND}
        strokeWidth={20} 
      /> */}
      <Avatar
        source={{
          uri: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        _image={{
          rounded: "md",
        }}
        size={30}
        rounded="md"
      />
      <VStack space="1">
        <Text
          fontSize={10}
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
