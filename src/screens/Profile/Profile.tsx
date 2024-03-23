import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import MainContent from "../../components/MainContent";
import {
  View,
  Pressable,
  HStack,
  Icon,
  Heading,
  SectionList,
  IconButton,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../shared/theme";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationProps } from "../../shared/types";
import { Iconify } from "react-native-iconify";
import { CONSTANTS } from "../../shared/constants";
import { GlobalContext } from "../../store/context";
import { saveToAsyncStorage } from "../../services/storageService";

const Profile = (props: NavigationProps) => {
  const { logoutUser } = useContext(GlobalContext);

  const logUserOut = async () => {
    logoutUser();
    await saveToAsyncStorage(CONSTANTS.STORAGE_KEYS.USER, null);
    props.navigation.navigate(CONSTANTS.AppPages.ONBOARD);
  };

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
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
          />
        ),
        headerRightContainerStyle: CONSTANTS.CommonStyles.headerRightStyle,
      });

      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
        });
      };
    }, [])
  );

  const sectionData = [
    {
      title: "Profile",
      data: [
        {
          name: "Theme",
          iconName: "color-palette-sharp",
          onPress: () => null,
        },
      ],
    },
    {
      title: "Customize",
      data: [
        {
          name: "Theme",
          iconName: "color-palette-sharp",
          onPress: () => null,
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          name: "Rate Us",
          iconName: "star-sharp",
          onPress: () => null,
        },
        {
          name: "Share App",
          iconName: "share-social-sharp",
          onPress: () => null,
        },
        {
          name: "About To-do List",
          iconName: "apps-sharp",
          onPress: () => null,
        },
        {
          name: "About developer",
          iconName: "md-person-circle-sharp",
          onPress: () => null,
        },
        {
          name: "Privacy Policy",
          iconName: "shield-checkmark-sharp",
          onPress: () => null,
        },
        {
          name: "Version",
          iconName: "layers-sharp",
          onPress: () => null,
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      android_ripple={{ color: "" }}
      style={styles.itemContainer}
      w={"full"}
      onPress={item.onPress}
    >
      <HStack space={4}>
        <Icon
          as={Ionicons}
          name={item.iconName}
          size={"sm"}
          color={theme.FOREGROUND}
        />
        <Heading fontSize={14} fontWeight={"normal"} color={"black"}>
          {item.name}
        </Heading>
      </HStack>
    </Pressable>
  );

  return (
    <MainContent>
      <SectionList
        mb="4"
        keyExtractor={(item, index) => item + index}
        sections={sectionData}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Heading
            fontSize={9}
            color={theme.SECONDARY}
            style={styles.sectionHeader}
          >
            {section.title.toUpperCase()}
          </Heading>
        )}
      />
    </MainContent>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 15,
    paddingBottom: 7,
    paddingHorizontal: 10,
  },
  itemContainer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
