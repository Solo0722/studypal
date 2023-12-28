import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { theme } from "../../shared/theme";

const QuotesBanner = () => {
  return (
    <View w="full" height="200" p="4" rounded="10" bgColor={theme.ACCENT}>
      {/* <Text>QuotesBanner</Text> */}
    </View>
  );
};

export default QuotesBanner;

const styles = StyleSheet.create({});
