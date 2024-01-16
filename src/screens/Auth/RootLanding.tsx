import React, { useContext, useEffect } from "react";
import { CONSTANTS } from "../../shared/constants";
import { Button, Center } from "native-base";
import Loader from "../../components/Loader";
import { NavigationProps } from "../../shared/types";
import { GlobalContext } from "../../store/context";
import { readFromAsyncStorage } from "../../services/storageService";

const RootLanding = (props: NavigationProps) => {
  const { AppPages, STORAGE_KEYS } = CONSTANTS;
  const { updateUserData } = useContext(GlobalContext);

  const redirectUser = async () => {
    const data = await readFromAsyncStorage(STORAGE_KEYS.USER);

    if (data) {
      updateUserData(data);
      props.navigation.navigate(AppPages.TAB);
    }
    props.navigation.navigate(AppPages.ONBOARD);
  };
  useEffect(() => {
    redirectUser();
  }, []);

  return null;
};

export default RootLanding;
