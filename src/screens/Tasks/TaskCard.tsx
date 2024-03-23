import { TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  Checkbox,
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
import { TaskData } from "../../shared/types";

type Props = {
  index: number;
  item: TaskData;
};

const TaskCard = ({ index, item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity>
      <Box
        // minH={"250"}
        // maxH={"300"}
        w={"full"}
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
            <Checkbox
              aria-label="Checkbox"
              value=""
              isChecked={item.isCompleted}
              onChange={(isSelected) => null}
              // borderColor={item.color}
              _checked={{
                backgroundColor: item.color,
                borderColor: item.color,
              }}
              _unchecked={{
                borderColor: item.color,
              }}
              borderRadius={"full"}
              size={"lg"}
            />
            {/* <IconButton
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
            /> */}
            <VStack space={1}>
              <Heading
                fontSize={"sm"}
                fontWeight={"bold"}
                color={theme.BACKGROUND}
              >
                {item.title}
              </Heading>
              <Text
                fontSize={9}
                color={theme.ACCENT_FOREGROUND}
                fontWeight="semibold"
              >
                Due Date: {format(new Date(), "cccc do MMMM yyyy")}
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
            {item.progress || 0}% complete
          </Text>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default TaskCard;
