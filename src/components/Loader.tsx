import React from "react";
import { Center, Spinner } from "native-base";
import { theme } from "../shared/theme";

const Loader = () => {
  return (
    <Center>
      <Spinner
        accessibilityLabel="Loading..."
        color={theme.PRIMARY}
        size="lg"
      />
    </Center>
  );
};

export default Loader;
