import React, { ComponentType } from "react";
import { FlatList, Text, VStack } from "native-base";
import { theme } from "../shared/theme";
import { ListRenderItem } from "react-native";

type Props = {
  data: any[];
  listTitle?: string;
  showListTitle?: boolean;
  renderItem: ListRenderItem<any>;
  horizontal?: boolean;
  ItemSeparatorComponent?: ComponentType<any>;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  ListEmptyComponent?: ComponentType<any>;
  ListFooterComponent?: ComponentType<any>;
  ListHeaderComponent?: ComponentType<any>;
  numColumns?: number;
  keyExtractor?: (item: any) => string;
  extraData?: any;
  initialNumToRender?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  onRefresh?: () => void;
  refreshing?: boolean;
  windowSize?: number;
  contentContainerStyle?: object;
  styles?: object;
  px?: number | string;
  py?: number | string;
};

const ListBuilder = (props: Props) => {
  return (
    <VStack space="2">
      {props.showListTitle && (
        <Text
          fontSize={10}
          fontWeight={"semibold"}
          color={theme.ACCENT_FOREGROUND}
        >
          {props.listTitle}
        </Text>
      )}
      <FlatList
        data={props.data}
        horizontal={props.horizontal}
        renderItem={props.renderItem}
        showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
        ItemSeparatorComponent={props.ItemSeparatorComponent}
        ListEmptyComponent={props.ListEmptyComponent}
        ListFooterComponent={props.ListFooterComponent}
        ListHeaderComponent={props.ListHeaderComponent}
        numColumns={props.numColumns}
        keyExtractor={props.keyExtractor}
        extraData={props.extraData}
        initialNumToRender={props.initialNumToRender}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={props.onEndReachedThreshold}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
        windowSize={props.windowSize}
        contentContainerStyle={props.contentContainerStyle}
        px={props.px}
        py={props.py}
        style={props.styles}
      />
    </VStack>
  );
};

export default ListBuilder;
