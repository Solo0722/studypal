import React from "react";
import { Fab } from "native-base";
import { theme } from "../shared/theme";

type Props = {
  icon: React.ReactElement;
  onPress: () => void;
  bottom?: number;
  bgColor?: string;
};

const FabButton = (props: Props) => {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={props.icon}
      onPress={props.onPress}
      bottom={props.bottom || 20}
      bgColor={props.bgColor || theme.SECONDARY}
    />
  );
};

export default FabButton;
