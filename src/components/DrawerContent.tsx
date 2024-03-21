import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Button,
  HStack,
  IconButton,
  Text,
  VStack,
  View,
} from "native-base";
import { theme } from "../shared/theme";
import { CONSTANTS } from "../shared/constants";
import { Iconify } from "react-native-iconify";
import { useRoute } from "@react-navigation/native";
import { GlobalContext } from "../store/context";
import { saveToAsyncStorage } from "../services/storageService";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { AppPages } = CONSTANTS;
  const routes = useRoute();

  const { logoutUser } = useContext(GlobalContext);

  const logUserOut = async () => {
    logoutUser();
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.USER, null);
    props.navigation.navigate(CONSTANTS.AppPages.ONBOARD);
  };

  return (
    <View bgColor={theme.PRIMARY} w="full" h="full" py="10">
      <View
        // mx="4"
        // mb="4"
        w="full"
        justifyContent={"center"}
        alignItems="center"
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <HStack w="full" space="3">
          <Avatar size={"md"} />
          <VStack justifyContent={"center"}>
            <Text color={theme.ACCENT_FOREGROUND}>Hello</Text>
            <Text color={theme.SECONDARY} fontWeight={"bold"} fontSize={20}>
              Solomon Owusu-Ansah
            </Text>
          </VStack>
        </HStack>
      </View>
      <View>
        {props.state.routes.map((route) => (
          <DrawerItem
            {...route}
            style={{
              borderRadius: 16,
              marginVertical: 10,
            }}
            // focused={}
            key={route.key}
            label={route.name}
            onPress={() => props.navigation.navigate(route.name)}
            activeBackgroundColor="#4e4e"
            activeTintColor={theme.BACKGROUND}
            inactiveTintColor={theme.BACKGROUND}
            icon={(props) => (
              <Iconify
                {...props}
                icon="solar:home-smile-outline"
                // size={22}
                strokeWidth={20}
              />
            )}
          />
        ))}
      </View>
      <HStack
        // w="full"
        space="3"
        position={"absolute"}
        bottom={5}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems="center"
        style={{
          //   marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Button
          _text={{
            color: theme.BACKGROUND,
          }}
          startIcon={
            <Iconify
              icon="solar:logout-3-outline"
              size={18}
              color={theme.BACKGROUND}
              strokeWidth={20}
            />
          }
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          onPress={logUserOut}
        >
          Log out
        </Button>
        <Text color={theme.BACKGROUND}>App version: 1.7.1</Text>
      </HStack>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
