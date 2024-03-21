import { StyleSheet, TouchableOpacity } from "react-native";
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
import { Note } from "../../shared/types";

type Props = {
  orientation: "horizontal" | "vertical";
  item: Note;
};

const NoteCard = ({ orientation, item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  console.log(item);

  return (
    <TouchableOpacity
      onPress={() => navigate(CONSTANTS.AppPages.NOTE, { noteId: item.id })}
    >
      <Box
        // minH={"250"}
        // maxH={"300"}
        w={orientation === "horizontal" ? "360" : "full"}
        p="3"
        borderRadius={10}
        bgColor={theme.ACCENT}
      >
        <VStack space="3">
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
                  {item.title}
                </Heading>
                <Text
                  fontSize={9}
                  color={theme.ACCENT_FOREGROUND}
                  fontWeight="semibold"
                >
                  {format(new Date(), "EEEE,do MMM yyyy")}
                </Text>
              </VStack>
            </HStack>
            <IconButton
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
            />
          </View>
          <Text
            color={theme.FOREGROUND_2}
            fontSize={"xs"}
            fontWeight={"normal"}
            lineHeight={22}
          >
            {truncateString(item.content, 200)}
          </Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
