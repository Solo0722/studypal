import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { theme } from "../shared/theme";

type Props = {
  isMainPage: boolean;
};

const MainHeader = () => {
  return <View bgColor={theme.PRIMARY} roundedBottom={"md"} w="full"></View>;
};

export default MainHeader;

const styles = StyleSheet.create({});
