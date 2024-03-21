import { LinearGradient } from "expo-linear-gradient";
import { Center, VStack, View } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import LogoView from "./LogoView";

const AuthWrapper = ({ children }) => {
  return (
    <View w="full" h="full" flex={1}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        imageStyle={{ resizeMode: "cover", width: "100%", height: "100%" }}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <LinearGradient
          colors={[
            "rgba(10,10,25,0.2)",
            "rgba(10,10,25,0.8)",
            "rgba(10,10,25,1)",
          ]}
          style={{ flex: 1 }}
        >
          <Center
            flex={1}
            h="full"
            w="full"
            py={"20"}
            px={"10"}
            justifyContent={"flex-end"}
          >
            <VStack space="10" alignItems={"center"} w="full">
              <LogoView />
              {children}
            </VStack>
          </Center>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AuthWrapper;
