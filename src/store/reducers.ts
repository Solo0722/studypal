import { CONSTANTS } from "../shared/constants";
import {
  initialUserState,
  initialNotesState,
  initialClassesState,
  initialTasksState,
} from "./initialStates";

const {
  SET_USER,
  LOGOUT_USER,

  CREATE_NOTE,
  SET_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,

  CREATE_CLASS,
  SET_CLASSES,
  UPDATE_CLASS,
  DELETE_CLASS,

  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_TASKS,
} = CONSTANTS.ACTION_TYPES;

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export const notesReducers = (state = initialNotesState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return [...state, ...action.payload];

    case CREATE_NOTE:
      return [...state, action.payload];

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);

    case UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

    default:
      return state;
  }
};

export const classesReducers = (state = initialClassesState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return [...state, ...action.payload];
    case CREATE_CLASS:
      return [...state, action.payload];
    case DELETE_CLASS:
      return state.filter((classData) => classData.id !== action.payload.id);
    case UPDATE_CLASS:
      return state.map((classData) =>
        classData.id === action.payload.id ? action.payload : classData
      );
    default:
      return state;
  }
};

export const tasksReducers = (state = initialTasksState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return [...state, ...action.payload];
    case CREATE_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((taskData) => taskData.id !== action.payload.id);
    case UPDATE_TASK:
      return state.map((taskData) =>
        taskData.id === action.payload.id ? action.payload : taskData
      );
    default:
      return state;
  }
};
