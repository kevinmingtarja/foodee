import * as SecureStore from "expo-secure-store";

export const getItem = (key: string): Promise<string | null> =>
    SecureStore.getItemAsync(key);

export const setItem = (key: string, value: string): Promise<void> =>
    SecureStore.setItemAsync(key, value);

export const removeItem = (key: string): Promise<void> =>
    SecureStore.deleteItemAsync(key);

export const getItemLocal = getItem;

export const setItemLocal = setItem;

export const removeItemLocal = removeItem;
