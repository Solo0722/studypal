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
import { Dimensions } from "react-native";

type Props = {
  orientation: "horizontal" | "vertical";
  item: Note;
  index: number;
};

const NoteCard = ({ orientation, item, index }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const randomBool = React.useMemo(() => Math.random() < 0.5, []);
  return (
    <TouchableOpacity
      onPress={() => navigate(CONSTANTS.AppPages.NOTE, { noteData: item })}
    >
      <Box
        // minH={"250"}
        // maxH={"300"}
        w={Dimensions.get("window").width / 2 - 10}
        minH={"200"}
        alignSelf="stretch"
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
            <VStack space={1}>
              <Text
                fontSize={9}
                color={theme.ACCENT_FOREGROUND}
                fontWeight="semibold"
              >
                {format(new Date(), "EEEE,do MMM yyyy")}
              </Text>
            </VStack>
            <IconButton
              variant={"unstyled"}
              colorScheme={"coolGray"}
              bgColor={"transparent"}
              display={"flex"}
              flexDirection={"row"}
              rounded={"full"}
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

          <Heading fontSize={"sm"} fontWeight={"bold"}>
            {item.title}
          </Heading>

          <Text
            color={theme.FOREGROUND_2}
            fontSize={"xs"}
            fontWeight={"normal"}
            lineHeight={22}
          >
            {truncateString(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, suscipit amet nam, accusamus obcaecati aliquid ea atque facilis magnam eligendi ratione perspiciatis repellat tenetur odio doloribus, vel enim quam distinctio.",
              200
            )}
          </Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
