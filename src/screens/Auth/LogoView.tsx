import { StyleSheet } from "react-native";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Text, VStack } from "native-base";
import { theme } from "../../shared/theme";

const LogoView = () => {
  return (
    <VStack space="2" alignItems={"center"} mt="20" w="full">
      <Logo width={120} height={120} />
      <Text
        fontWeight={"normal"}
        textAlign={"center"}
        color={theme.FOREGROUND}
        fontSize={10}
      >
        Your Learning Journey, Your StudyPal!
      </Text>
    </VStack>
  );
};

export default LogoView;

const styles = StyleSheet.create({});
