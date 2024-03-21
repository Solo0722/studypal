import React, { useState } from "react";
import { NavigationProps } from "../../shared/types";
import { Button, VStack, useToast } from "native-base";
import { useStatusBar } from "../../hooks/useStatusBar";
import { useNavigationBar } from "../../hooks/useNavigationBar";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { Iconify } from "react-native-iconify";
import { signinWithGoogle } from "../../services/authService";
import { saveToAsyncStorage } from "../../services/storageService";
import AuthWrapper from "./AuthWrapper";

const Onboard = ({ navigation }: NavigationProps) => {
  useStatusBar(true);
  useNavigationBar();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignin = async () => {
    const response = await signinWithGoogle();
    console.log("res from google sign: ", response);

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
    navigation.navigate(CONSTANTS.AppPages.HOME);
  };

  return (
    <AuthWrapper>
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
          startIcon={<Iconify icon="logos:apple" size={20} strokeWidth={20} />}
          onPress={() => navigation.navigate(CONSTANTS.AppPages.HOME)}
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
            <Iconify icon="logos:google-icon" size={20} strokeWidth={20} />
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
    </AuthWrapper>
  );
};

export default Onboard;
