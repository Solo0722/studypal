import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "native-base";
import { theme } from "../../shared/theme";

const FolderCard = (props) => {
  const { setActiveFolder, activeFolder, index } = props;
  return (
    <Button
      variant={"unstyled"}
      colorScheme={"coolGray"}
      bgColor={activeFolder === index ? theme.PRIMARY : theme.ACCENT}
      size="xs"
      display={"flex"}
      flexDirection={"row"}
      alignItems={"flex-start"}
      _text={{
        color:
          activeFolder === index ? theme.FOREGROUND : theme.ACCENT_FOREGROUND,
        fontSize: "xs",
        fontWeight: "bold",
        textAlign: "center",
      }}
      rounded={10}
      minW={"20"}
      onPress={() => setActiveFolder(index)}
    >
      Personal
    </Button>
  );
};

export default FolderCard;

const styles = StyleSheet.create({});
