import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  useToast,
  VStack,
} from "native-base";
import { signupUserWithEmail } from "../../services/authService";
import { CONSTANTS } from "../../shared/constants";
import { saveToAsyncStorage } from "../../services/storageService";
import { theme } from "../../shared/theme";
import AuthWrapper from "./AuthWrapper";
import { useStatusBar } from "../../hooks/useStatusBar";
import { useNavigationBar } from "../../hooks/useNavigationBar";

const Signup = ({ navigation }) => {
  useStatusBar(true);
  useNavigationBar(true);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const [signupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e, name) => {
    setSignupFormData({
      ...signupFormData,
      [name]: e.trim(),
    });
  };

  const validate = () => {
    let regex = /[a-z0-9]+@[a-z]+.[a-z]{2,4}/;
    if (!signupFormData.email) {
      setErrors({
        email: "Email is required",
      });
      return false;
    }
    if (regex.test(signupFormData.email) === false) {
      setErrors({
        email: "Email is not valid",
      });
      return false;
    }
    if (!signupFormData.password) {
      setErrors({
        password: "Password is required",
      });
      return false;
    }
    return true;
  };

  const submitSignupForm = async () => {
    if (validate()) {
      setLoading(true);
      setErrors({});

      const response = await signupUserWithEmail(
        signupFormData.email,
        signupFormData.password
      );

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
        <Heading fontWeight="bold" color="white" textAlign="center">
          Sign up
        </Heading>
        <FormControl isInvalid={"email" in errors}>
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
          onPress={submitSignupForm}
        >
          Sign up
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
            Already have an account?{" "}
          </Text>
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: `${theme.SECONDARY}`,
              textDecoration: "none",
            }}
            onPress={() => navigation.navigate(CONSTANTS.AppPages.LOGIN)}
          >
            Sign in
          </Link>
        </HStack>
      </VStack>
    </AuthWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
    position: "relative",
  },
  signupContainer: {
    width: "100%",
  },
});
