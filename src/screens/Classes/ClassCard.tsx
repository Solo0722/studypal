import { TouchableOpacity } from "react-native";
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

type Props = {
  orientation: "horizontal" | "vertical";
  index: number;
};

const ClassCard = ({ orientation, index }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate(CONSTANTS.AppPages.NOTE, {
          noteId: index,
          title: "Hello world",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
              bgColor={getRandomColor()}
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
              <Heading fontSize={"sm"} fontWeight={"bold"}>
                Computer Organisation
              </Heading>
              <Text
                fontSize={9}
                color={theme.ACCENT_FOREGROUND}
                fontWeight="semibold"
              >
                {format(new Date(), "hh:mm a")} -{" "}
                {format(new Date(-3), "hh:mm a")} {format(new Date(), "cccc")}
              </Text>
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
            {truncateString("Eliel Keelson", 15)}
          </Text>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default ClassCard;
