import React, { useState } from "react";
import {
  Button,
  FormControl,
  HStack,
  Input,
  Link,
  Text,
  VStack,
  useToast,
  Heading,
} from "native-base";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { signinUserWithEmail } from "../../services/authService";
import { saveToAsyncStorage } from "../../services/storageService";
import AuthWrapper from "./AuthWrapper";
import { useStatusBar } from "../../hooks/useStatusBar";
import { useNavigationBar } from "../../hooks/useNavigationBar";

const Signin = ({ navigation }) => {
  useStatusBar(true);
  useNavigationBar(true);
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
      console.log("res from login: ", response);
      if (response.error) {
        toast.show({
          description: "Something went wrong!",
          colorScheme: "error",
          bgColor: "error.500",
        });
        setLoading(false);
        return;
      }
      await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.USER, response.user);
      setLoading(false);
      navigation.navigate(CONSTANTS.AppPages.SYNCPAGE);
    }
  };

  return (
    <AuthWrapper>
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
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
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
            fontWeight: "semibold",
          }}
          _pressed={{
            opacity: 0.8,
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
            onPress={() => navigation.navigate(CONSTANTS.AppPages.SIGNUP)}
          >
            Sign up
          </Link>
        </HStack>
      </VStack>
    </AuthWrapper>
  );
};

export default Signin;
