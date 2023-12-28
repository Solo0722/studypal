import React from "react";
import { Box, Pressable, Heading, VStack } from "native-base";
import { theme } from "../shared/theme";

const Tabbar = ({ state, descriptors, navigation }) => {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      // height="32"
      backgroundColor={theme.BACKGROUND}
      shadow={"9"}
      borderTopWidth={0.5}
      borderTopColor={theme.BORDER}
      py="1"
      style={{ height: 60 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const activeIconName = options.tabBarActiveIcon;
        const inactiveIconName = options.tabBarInactiveIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={`${index}--${route.key}`}
            android_ripple={{ color: "", borderless: false, foreground: true }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            h="full"
          >
            <VStack
              space={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* <Icon
                as={Ionicons}
                name={isFocused ? activeIconName : inactiveIconName}
                size={"md"}
                color={isFocused ? "white" : "coolGray.400"}
              /> */}
              {isFocused ? activeIconName : inactiveIconName}
              <Heading
                fontSize={"10"}
                color={isFocused ? `${theme.PRIMARY}` : `${theme.FOREGROUND}`}
                fontFamily={"Poppins-regular"}
              >
                {label}
              </Heading>
            </VStack>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default Tabbar;
