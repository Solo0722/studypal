import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToAsyncStorage = async (key: string, value: any) => {
  const valueToString = JSON.stringify(value);

  try {
    await AsyncStorage.setItem(key, valueToString);
  } catch (error) {
    console.log("error with saveToAsync ", error);
    throw error;
  }
};

export const readFromAsyncStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.log("error with readFromAsyncStorage", error);
    throw error;
  }
};

export const clearFromAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("error with clearFromAsync", error);
    throw error;
  }
};
