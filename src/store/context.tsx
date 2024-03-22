import React, { createContext, useMemo, useReducer } from "react";
import { classesReducers, notesReducers, userReducer } from "./reducers";
import {
  initialClassesState,
  initialNotesState,
  initialUserState,
} from "./initialStates";
import { CONSTANTS } from "../shared/constants";
import { ClassData, Note } from "../shared/types";
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
  classesState: initialClassesState,
  setClassesData: (classesData: ClassData[]) => {},
  createClass: (classData: ClassData) => {},
  updateClass: (classData: ClassData) => {},
  deleteClass: (classData: ClassData) => {},
});

const {
  SET_NOTES,
  SET_USER,
  LOGOUT_USER,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  CREATE_CLASS,
  DELETE_CLASS,
  UPDATE_CLASS,
  SET_CLASSES,
} = CONSTANTS.ACTION_TYPES;

const GlobalProvider = (props: Props) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  const [notesState, dispatchNotes] = useReducer(
    notesReducers,
    initialNotesState
  );
  const [classesState, dispatchClasses] = useReducer(
    classesReducers,
    initialClassesState
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

  const setClassesData = (classesData: ClassData[]) => {
    dispatchClasses({ type: SET_CLASSES, payload: classesData });
  };

  const createClass = (classData: ClassData) => {
    dispatchClasses({ type: CREATE_CLASS, payload: classData });
  };

  const updateClass = (classData: ClassData) => {
    dispatchClasses({ type: UPDATE_CLASS, payload: classData });
  };

  const deleteClass = (classData: ClassData) => {
    dispatchClasses({ type: DELETE_CLASS, payload: classData });
  };

  const contextValue = useMemo(() => {
    return {
      userState,
      updateUserData,
      logoutUser,

      notesState,
      setNotesData,
      createNote,
      updateNote,
      deleteNote,

      classesState,
      setClassesData,
      createClass,
      updateClass,
      deleteClass,
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

    classesState,
    setClassesData,
    createClass,
    updateClass,
    deleteClass,
  ]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
