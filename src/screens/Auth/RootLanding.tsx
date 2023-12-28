import React, { useEffect } from "react";
import { CONSTANTS } from "../../shared/constants";
import { Button, Center } from "native-base";
import Loader from "../../components/Loader";
import { NavigationProps } from "../../shared/types";

const RootLanding = (props: NavigationProps) => {
  const isUserLoggedIn = true;
  const { AppPages } = CONSTANTS;
  const redirectUser = () => {
    if (isUserLoggedIn) {
      console.log("User is logged in");
      props.navigation.navigate(AppPages.TAB);
    } else {
      console.log("User is not logged in");
      props.navigation.navigate(AppPages.SIGNUP);
    }
  };
  useEffect(() => {
    redirectUser();
  }, []);

  return (
    <Center flex={"1"} h="full" w="full">
      <Loader />
      <Button onPress={() => props.navigation.navigate(AppPages.TAB)}>
        Go to tab
      </Button>
    </Center>
  );
};

export default RootLanding;
