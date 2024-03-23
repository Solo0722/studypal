import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { Button, IconButton, VStack, View } from "native-base";
import NoteCard from "./NoteCard";
import FabButton from "../../components/FabButton";
import { Iconify } from "react-native-iconify";
import FolderCard from "./FolderCard";
import { CONSTANTS } from "../../shared/constants";
import { theme } from "../../shared/theme";
import { NavigationProps } from "../../shared/types";
import { useFocusEffect } from "@react-navigation/native";
import ListBuilder from "../../components/ListBuilder";
import { GlobalContext } from "../../store/context";
import isEmpty from "lodash/isEmpty";
import Empty from "../../components/Empty";
import MasonryList from "@react-native-seoul/masonry-list";
import VirtualizedList from "../../components/VirtualisedList";

const { AppPages, CommonStyles } = CONSTANTS;

const Notes = (props: NavigationProps) => {
  const [activeFolder, setActiveFolder] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              <Iconify
                icon="solar:magnifer-outline"
                size={18}
                color={theme.BACKGROUND}
                strokeWidth={20}
              />
            }
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            // onPress={() => props.navigation.navigate(AppPages.NOTE)}
          />
        ),
        headerRightContainerStyle: CommonStyles.headerRightStyle,
      });

      return () => {
        props.navigation.setOptions({
          headerRight: undefined,
        });
      };
    }, [])
  );

  const { notesState } = useContext(GlobalContext);

  const renderContent = () => {
    if (isEmpty(notesState)) return <Empty />;
    return (
      <VirtualizedList>
        <VStack space="6" py="4" px="2" w="full">
          <ListBuilder
            data={notesState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <NoteCard orientation={"vertical"} item={item} index={index} />
            )}
            ItemSeparatorComponent={() => <View my="2" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
            numColumns={2}
            columnWrapperStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          />
        </VStack>
        {/* <View w="full" flexDir={"row"} bgColor={theme.BACKGROUND} px="2" py="4">
          <ListBuilder
            data={[...new Array(5)]}
            renderItem={({ index }) => (
              <FolderCard
                activeFolder={activeFolder}
                setActiveFolder={setActiveFolder}
                index={index}
              />
            )}
            ListHeaderComponent={() => (
              <Button
                variant={"unstyled"}
                colorScheme={"coolGray"}
                bgColor={theme.ACCENT}
                size="xs"
                display={"flex"}
                flexDirection={"row"}
                alignItems={"flex-start"}
                _text={{
                  color: theme.ACCENT_FOREGROUND,
                  fontSize: "xs",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
                rounded={10}
                // minW={"20"}
                mr={"2"}
                startIcon={
                  <Iconify
                    icon="solar:add-circle-outline"
                    size={20}
                    color={theme.BACKGROUND}
                    strokeWidth={20}
                  />
                }
              ></Button>
            )}
            ItemSeparatorComponent={() => <View mx="2" />}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View> */}
      </VirtualizedList>
    );
  };

  return (
    <View flex={1} h="full" w="full">
      {renderContent()}
      <FabButton
        bottom={10}
        icon={
          <Iconify
            icon="solar:pen-new-square-outline"
            size={24}
            color={theme.BACKGROUND}
            strokeWidth={20}
          />
        }
        onPress={() =>
          props.navigation.navigate(AppPages.CREATEEDITNOTE, { noteData: null })
        }
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
