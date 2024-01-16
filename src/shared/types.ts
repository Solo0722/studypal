import { NavigationProp } from "@react-navigation/native";
import { User } from "firebase/auth";

export type NavigationProps = {
  navigation: NavigationProp<any>;
};

export type AuthResponse = { user?: User | null; error?: any };
