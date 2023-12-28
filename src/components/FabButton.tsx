import React from "react";
import { Fab } from "native-base";
import { theme } from "../shared/theme";

const FabButton = ({ icon, onPress }) => {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={icon}
      onPress={onPress}
      bottom={20}
      bgColor={theme.SECONDARY}
    />
  );
};

export default FabButton;
