import { Dimensions } from "react-native";
import React, { useState } from "react";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import { TabBarProps, TabView } from "react-native-tab-view";
import { Button, View } from "native-base";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { NavigationProps } from "../../shared/types";
import MainContent from "../../components/MainContent";
import Exams from "../Exams/Exams";
import Classes from "../Classes/Classes";
import Tasks from "../Tasks/Tasks";

const { AppPages } = CONSTANTS;

const Schedule = (props: NavigationProps) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState<{ key: string; title: string }[]>([
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

  const _renderTabBar = (_props: TabBarProps<any>) => {
    return (
      <View py="4" w="full">
        <View w="full" flexDir={"row"}>
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
                key={route.key}
                variant={"unstyled"}
                colorScheme={"coolGray"}
                bgColor={isActive ? theme.PRIMARY : theme.ACCENT}
                size="xs"
                mr="4"
                display={"flex"}
                flexDirection={"row"}
                alignItems={"flex-start"}
                _text={{
                  color: isActive ? theme.FOREGROUND : theme.ACCENT_FOREGROUND,
                  fontSize: "xs",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
                rounded={10}
                minW={"20"}
                onPress={() => _props.jumpTo(route.key)}
              >
                {route.title}
              </Button>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <MainContent>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={_renderTabBar}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
      <FabButton
        bottom={5}
        icon={
          <Iconify
            icon="solar:add-circle-outline"
            size={24}
            color={theme.FOREGROUND}
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
    </MainContent>
  );
};

export default Schedule;
