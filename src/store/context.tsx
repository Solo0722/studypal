import React, { createContext, useReducer } from "react";
import { userReducer } from "./reducers";
import { initialUserState } from "./initialStates";
import { CONSTANTS } from "../shared/constants";
type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({
  userState: initialUserState,
  updateUserData: (user) => {},
});

const GlobalProvider = (props: Props) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);

  const updateUserData = (user) => {
    dispatchUser({ type: CONSTANTS.ACTION_TYPES.SET_USER, payload: user });
  };

  return (
    <GlobalContext.Provider
      value={{
        userState,
        updateUserData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
