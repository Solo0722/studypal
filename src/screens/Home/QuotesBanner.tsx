import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { theme } from "../../shared/theme";
import { LinearGradient } from "expo-linear-gradient";

const QuotesBanner = () => {
  return (
    <View
      px="2"
      w="full"
      height="200"
      rounded="10"
      shadow={5}
      bgColor={theme.ACCENT}
    >
      {/* <ImageBackground source={ {uri: ""}} /> */}
    </View>
  );
};

export default QuotesBanner;

const styles = StyleSheet.create({});
