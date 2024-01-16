import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig.js";
import { AuthResponse } from "../shared/types.js";

export const signinWithGoogle = async () => {
  const res: AuthResponse = await signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return { token, user };
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { error, credential };
    });
  return res;
};

const signinWithApple = () => {};

export const signinUserWithEmail = async (email: string, password: string) => {
  const res: AuthResponse = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      return { user };
    })
    .catch((error) => {
      return { error };
    });
  return res;
};

export const signupUserWithEmail = async (email: string, password: string) => {
  const res: AuthResponse = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      return { user };
    })
    .catch((error) => {
      return { error };
    });
  return res;
};
