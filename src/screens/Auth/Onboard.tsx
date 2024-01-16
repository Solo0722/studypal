import React, { useState } from "react";
import { NavigationProps } from "../../shared/types";
import {
  Button,
  Center,
  Image,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { ImageBackground } from "react-native";
import { useStatusBar } from "../../hooks/useStatusBar";
import { useNavigationBar } from "../../hooks/useNavigationBar";
import { theme } from "../../shared/theme";
import App from "../../../App";
import { CONSTANTS } from "../../shared/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Iconify } from "react-native-iconify";
import { signinWithGoogle } from "../../services/authService";
import { saveToAsyncStorage } from "../../services/storageService";
import LogoView from "./LogoView";

const Onboard = ({ navigation }: NavigationProps) => {
  useStatusBar(true);
  useNavigationBar();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignin = async () => {
    const response = await signinWithGoogle();

    if (response.error) {
      toast.show({
        description: response.error.errorMessage,
        colorScheme: "error",
        bgColor: "error.500",
      });
      setLoading(false);
      return;
    }
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.USER, response.user);
    setLoading(false);
    navigation.navigate(CONSTANTS.AppPages.TAB);
  };

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
              <VStack space="4" alignItems={"center"} w="full">
                <Button
                  rounded={"full"}
                  w="full"
                  p={"3"}
                  backgroundColor={theme.FOREGROUND}
                  _text={{ fontWeight: "normal", color: "black" }}
                  _pressed={{
                    opacity: 0.8,
                  }}
                  startIcon={
                    <Iconify icon="logos:apple" size={20} strokeWidth={20} />
                  }
                  onPress={() => navigation.navigate(CONSTANTS.AppPages.TAB)}
                >
                  Contine with Apple
                </Button>
                <Button
                  isLoading={loading}
                  rounded={"full"}
                  variant="outline"
                  w="full"
                  p={"3"}
                  borderColor={theme.FOREGROUND}
                  _text={{ fontWeight: "normal", color: "white" }}
                  _pressed={{
                    opacity: 0.8,
                  }}
                  startIcon={
                    <Iconify
                      icon="logos:google-icon"
                      size={20}
                      strokeWidth={20}
                    />
                  }
                  onPress={handleGoogleSignin}
                >
                  Continue with Google
                </Button>

                <Button
                  variant="outline"
                  rounded={"full"}
                  w="full"
                  p={"3"}
                  borderColor={theme.SECONDARY}
                  _text={{ fontWeight: "normal", color: "white" }}
                  _pressed={{
                    opacity: 0.8,
                  }}
                  startIcon={
                    <Iconify
                      icon="solar:letter-bold"
                      color={"white"}
                      size={20}
                      strokeWidth={20}
                    />
                  }
                  onPress={() => navigation.navigate(CONSTANTS.AppPages.LOGIN)}
                >
                  Continue with Email
                </Button>
              </VStack>
            </VStack>
          </Center>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Onboard;
