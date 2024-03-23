import { NavigationProp } from "@react-navigation/native";
import { User } from "firebase/auth";

export type NavigationProps = {
  navigation: NavigationProp<any>;
};

export type AuthResponse = { user?: User | null; error?: any };

export type Note = {
  id: string;
  title?: string;
  content: any;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  attachments?: any[];
  category?: string;
  relatedClassId?: string;
  relatedSubjectId?: string;
};

export type ClassData = {
  id: string;
  color: string;
  userId: string;
  subject: string;
  // relatedSubjectId: string;
  module?: string | number;
  tutor?: string;
  building?: string;
  room?: string | number;
  repeat: boolean;
  startDate: Date;
  endDate: Date;
  timeDurations: {
    [day: string]: {
      startTime: Date;
      endTime: Date;
    };
  }[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type TaskStep = {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TaskData = {
  id: string;
  color: string;
  title: string;
  description: string;
  taskType: "revision" | "assignment" | "others";
  dueDate: Date;
  isCompleted: boolean;
  userId: string;
  relatedSubjectId?: string;
  progress?: number;
  createdAt?: Date;
  updatedAt?: Date;
  taskSteps?: TaskStep[];
  reminderDate?: Date;
};

export type Subject = {
  id: string;
  name: string;
  color: string;
  userId: string;
};
