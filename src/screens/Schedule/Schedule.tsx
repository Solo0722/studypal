import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import { SceneMap, TabView } from "react-native-tab-view";
import Classes from "./Classes";
import Exams from "./Exams";
import Tasks from "./Tasks";
import { Button, Heading, IconButton, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { NavigationProps } from "../../shared/types";

const { AppPages } = CONSTANTS;

const Schedule = (props: NavigationProps) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "classes",
      title: "Classes",
    },
    {
      key: "exams",
      title: "Exams",
    },
    {
      key: "tasks",
      title: "Tasks",
    },
  ]);

  const navigation = useNavigation();

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "classes":
        return <Classes />;
      case "exams":
        return <Exams />;
      case "tasks":
        return <Tasks />;
      default:
        return null;
    }
  };

  // const renderScene = SceneMap({
  //   classes: Classes,
  //   exams: Exams,
  //   tasks: Tasks,
  // });

  const _renderTabBar = (_props) => {
    return (
      <View
        w="full"
        flexDir={"row"}
        bgColor={theme.ACCENT}
        px="2"
        py="2"
        mb="2"
        shadow={"2"}
      >
        {_props.navigationState.routes.map((route, i) => {
          const isActive = index === i;
          return (
            // <TouchableOpacity
            //   key={i}
            //   style={[styles.tabItem, isActive ? styles.tabItemActive : null]}
            //   onPress={() => setIndex(i)}
            // >
            //   <Animated.Text
            //     style={{
            //       ...styles.textStyle,
            //       color: isActive ? "red" : "blue",
            //     }}
            //   >
            //     {route.title}
            //   </Animated.Text>
            // </TouchableOpacity>
            <Button
              // flex={1}
              variant={"unstyled"}
              colorScheme={"coolGray"}
              bgColor={isActive ? theme.ACCENT : theme.ACCENT}
              size="xs"
              display={"flex"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              _text={{
                color: isActive ? "coolGray.400" : "coolGray.600",
                fontSize: "xs",
                fontWeight: "bold",
              }}
              _icon={{
                color: isActive ? "coolGray.400" : "coolGray.600",
              }}
              rounded={10}
              minW={"20"}
              mr={"4"}
              onPress={() => _props.jumpTo(route.key)}
            >
              {route.title}
            </Button>
          );
        })}
      </View>
    );
  };
  return (
    <View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={_renderTabBar}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
      <FabButton
        icon={
          <Iconify
            icon="solar:add-circle-outline"
            size={24}
            color={theme.ACCENT}
            strokeWidth={20}
          />
        }
        onPress={() =>
          props.navigation.navigate(AppPages.EXAMS, {
            scheduleType: routes[index].key,
            isEdit: false,
          })
        }
      />
    </View>
  );
};

export default Schedule;
