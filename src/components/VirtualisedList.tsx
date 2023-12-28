import { FlatList } from "native-base";

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      data={[]}
      keyExtractor={() => "key"}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default VirtualizedList;
