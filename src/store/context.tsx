import React, { createContext, useMemo, useReducer } from "react";
import { notesReducers, userReducer } from "./reducers";
import { initialNotesState, initialUserState } from "./initialStates";
import { CONSTANTS } from "../shared/constants";
import { Note } from "../shared/types";
type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({
  userState: initialUserState,
  updateUserData: (user) => {},
  logoutUser: () => {},
  notesState: initialNotesState,
  setNotesData: (notes: Note[]) => {},
  createNote: (note: Note) => {},
  updateNote: (note: Note) => {},
  deleteNote: (note: Note) => {},
});

const {
  SET_NOTES,
  SET_USER,
  LOGOUT_USER,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} = CONSTANTS.ACTION_TYPES;

const GlobalProvider = (props: Props) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  const [notesState, dispatchNotes] = useReducer(
    notesReducers,
    initialNotesState
  );

  const updateUserData = (user) => {
    dispatchUser({ type: SET_USER, payload: user });
  };

  const logoutUser = () => {
    dispatchUser({ type: LOGOUT_USER, payload: {} });
  };

  const setNotesData = (notes: Note[]) => {
    dispatchNotes({ type: SET_NOTES, payload: notes });
  };

  const createNote = (note: Note) => {
    dispatchNotes({ type: CREATE_NOTE, payload: note });
  };

  const updateNote = (note: Note) => {
    dispatchNotes({ type: UPDATE_NOTE, payload: note });
  };

  const deleteNote = (note: Note) => {
    dispatchNotes({ type: DELETE_NOTE, payload: note });
  };

  const contextValue = useMemo(() => {
    return {
      userState,
      notesState,
      updateUserData,
      logoutUser,
      setNotesData,
      createNote,
      updateNote,
      deleteNote,
    };
  }, [
    userState,
    updateUserData,
    logoutUser,
    notesState,
    setNotesData,
    createNote,
    updateNote,
    deleteNote,
  ]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
