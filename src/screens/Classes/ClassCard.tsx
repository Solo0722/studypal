import { Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
  View,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { theme } from "../../shared/theme";
import { CONSTANTS } from "../../shared/constants";
import { getRandomColor, truncateString } from "../../services/uiService";
import { ClassData } from "../../shared/types";
import moment from "moment";

type Props = {
  orientation: "horizontal" | "vertical";
  index: number;
  item: ClassData;
};

const ClassCard = ({ orientation, index, item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <Pressable
      android_ripple={{ color: theme.ACCENT_FOREGROUND }}
      onPress={() =>
        navigate(CONSTANTS.AppPages.CREATEEDITCLASS, {
          classData: item,
        })
      }
    >
      <Box
        // minH={"250"}
        // maxH={"300"}
        w={orientation === "horizontal" ? "360" : "full"}
        p="3"
        borderRadius={10}
        bgColor={theme.ACCENT}
      >
        <View
          w="full"
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space="2" alignItems={"center"}>
            <IconButton
              variant={"unstyled"}
              colorScheme={"coolGray"}
              bgColor={item?.color || getRandomColor()}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              icon={
                <Icon
                  as={<Ionicons name="person" />}
                  color={theme.ACCENT}
                  size={"sm"}
                />
              }
            />
            <VStack space={1}>
              <Heading
                fontSize={"sm"}
                fontWeight={"bold"}
                color={theme.BACKGROUND}
              >
                {item?.subject || "Computer Organisation"}
              </Heading>
              {item?.timeDurations &&
                item.timeDurations.map((timeDuration) => (
                  <Text
                    fontSize={9}
                    color={theme.ACCENT_FOREGROUND}
                    fontWeight="semibold"
                  >
                    {moment(Object.values(timeDuration)[0].startTime).format(
                      "hh:mm a"
                    )}{" "}
                    -{" "}
                    {moment(Object.values(timeDuration)[0].endTime).format(
                      "hh:mm a"
                    )}{" "}
                    {Object.keys(timeDuration)[0]}
                  </Text>
                ))}
            </VStack>
          </HStack>
          {/* <IconButton
            variant={"unstyled"}
            colorScheme={"coolGray"}
            bgColor={"transparent"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            _pressed={{
              backgroundColor: "coolGray.600",
            }}
            icon={
              <Icon
                as={<Ionicons name="ellipsis-vertical" />}
                color={theme.MUTED}
                size={"sm"}
              />
            }
          /> */}
          <Text
            fontSize={9}
            color={theme.ACCENT_FOREGROUND}
            fontWeight="semibold"
          >
            {truncateString(item?.tutor || "Eliel Keelson", 15)}
          </Text>
        </View>
      </Box>
    </Pressable>
  );
};

export default ClassCard;
