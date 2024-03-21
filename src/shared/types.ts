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
};

export type Class = {
  id: string;
  name: string;
  color: string;
  userId: string;
  tutor?: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  taskType: string;
  dueDate: Date;
  completed: boolean;
  userId: string;
  classId: string;
  subjectId: string;
  progress?: number;
};

export type Subject = {
  id: string;
  name: string;
  color: string;
  userId: string;
};
