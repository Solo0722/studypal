import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  useToast,
  View,
  VStack,
} from "native-base";
import { signupUserWithEmail } from "../../services/authService";
import { CONSTANTS } from "../../shared/constants";
import { saveToAsyncStorage } from "../../services/storageService";
import { theme } from "../../shared/theme";

const Signup = ({ navigation }) => {
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
    <View
      w="full"
      h="full"
      flex="1"
      alignItems={"center"}
      justifyContent={"center"}
      p="4"
    >
      <View w="full">
        <VStack space={"8"} mt="5">
          <Heading fontWeight="bold" color="white">
            Sign up
          </Heading>
          <FormControl isInvalid={"email" in errors}>
            <Input
              variant={"outline"}
              color={"white"}
              bgColor="transparent"
              borderColor={"coolGray.700"}
              rounded={"lg"}
              _focus={{
                borderColor: "coolGray.600",
              }}
              _invalid={{
                borderColor: "error.50",
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
              rounded={"lg"}
              _focus={{
                borderColor: "coolGray.600",
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
            bgColor={"primary.500"}
            rounded={"lg"}
            colorScheme="primary"
            _text={{
              color: "black",
              fontWeight: "bold",
            }}
            _pressed={{
              bgColor: "primary.600",
            }}
            isLoading={loading}
            onPress={submitSignupForm}
          >
            Sign up
          </Button>

          <HStack top={"56"} justifyContent="center">
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
      </View>
    </View>
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
