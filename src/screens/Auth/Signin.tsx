import React, { useState } from "react";
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  View,
  VStack,
  useToast,
  Box,
  Divider,
  Spacer,
  Heading,
  Center,
} from "native-base";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { signinUserWithEmail } from "../../services/authService";
import { saveToAsyncStorage } from "../../services/storageService";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import LogoView from "./LogoView";

const Signin = ({ navigation }) => {
  const toast = useToast();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, name) => {
    setLoginFormData({
      ...loginFormData,
      [name]: e.trim(),
    });
  };

  const validate = () => {
    if (!loginFormData.email) {
      setErrors({
        email: "email is required",
      });
      return false;
    }
    if (!loginFormData.password) {
      setErrors({
        password: "Password is required",
      });

      return false;
    }

    return true;
  };

  const submitLoginForm = async () => {
    if (validate()) {
      setLoading(true);
      setErrors({});

      const response = await signinUserWithEmail(
        loginFormData.email,
        loginFormData.password
      );

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
    }
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
              <VStack space={"4"} w="full">
                <Heading fontWeight="bold" color="white" textAlign={"center"}>
                  Sign in
                </Heading>
                <FormControl isInvalid={"email" in errors}>
                  <Input
                    color="white"
                    variant={"outline"}
                    bgColor="transparent"
                    borderColor={"coolGray.700"}
                    rounded={"full"}
                    _invalid={{
                      borderColor: "error.50",
                    }}
                    _focus={{
                      borderColor: theme.SECONDARY,
                    }}
                    colorScheme={"coolGray"}
                    placeholder="Email"
                    onChangeText={(e) => handleChange(e, "email")}
                  />
                  {"email" in errors && (
                    <FormControl.ErrorMessage>
                      {errors.email}
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={"password" in errors}>
                  <Input
                    variant={"outline"}
                    color={"white"}
                    bgColor="transparent"
                    borderColor={"coolGray.700"}
                    rounded={"full"}
                    _focus={{
                      borderColor: theme.SECONDARY,
                    }}
                    _invalid={{
                      borderColor: "error.50",
                    }}
                    colorScheme={"coolGray"}
                    type="password"
                    placeholder="Password"
                    isRequired
                    onChangeText={(e) => handleChange(e, "password")}
                  />
                  {"password" in errors && (
                    <FormControl.ErrorMessage>
                      {errors.password}
                    </FormControl.ErrorMessage>
                  )}
                  {/* <Link
                    _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: `${theme.SECONDARY}`,
                      textDecoration: "none",
                    }}
                    alignSelf="flex-end"
                    mt="2"
                  >
                    Forget Password?
                  </Link> */}
                </FormControl>
                <Button
                  bgColor={theme.PRIMARY}
                  rounded={"full"}
                  colorScheme="primary"
                  _text={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                  _pressed={{
                    bgColor: "primary.600",
                  }}
                  isLoading={loading}
                  onPress={submitLoginForm}
                >
                  Login
                </Button>

                <HStack mt={"2"} justifyContent="center">
                  <Text
                    fontSize="xs"
                    fontWeight="500"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    I'm a new user.{" "}
                  </Text>
                  <Link
                    _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: `${theme.SECONDARY}`,
                      textDecoration: "none",
                    }}
                    onPress={() =>
                      navigation.navigate(CONSTANTS.AppPages.SIGNUP)
                    }
                  >
                    Sign up
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </Center>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Signin;
