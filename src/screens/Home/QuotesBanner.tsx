import { StyleSheet } from "react-native";
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
      <LinearGradient
        colors={[
          "rgba(10,10,25,0.2)",
          theme.PRIMARY,
          "rgba(10,10,25,0.8)",
          theme.SECONDARY,
          "rgba(10,10,25,1)",
        ]}
        start={{ x: 0.5, y: 0.4 }}
        end={{ x: 0.1, y: 0.9 }}
        style={{ flex: 1, borderRadius: 10, padding: 6 }}
      >
        {/* <LinearGradient
          colors={[
            "rgba(10,10,25,0.2)",
            "rgba(10,10,25,0.8)",
            "rgba(10,10,25,1)",
          ]}
          style={{ flex: 1, borderRadius: 10 }}
        ></LinearGradient> */}
      </LinearGradient>
      {/* <Text>QuotesBanner</Text> */}
    </View>
  );
};

export default QuotesBanner;

const styles = StyleSheet.create({});
