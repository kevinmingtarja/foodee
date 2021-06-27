import { getItem, setItem, removeItem } from "@utils/storage";

const ACCESS_TOKEN_KEY = "access";
const USERNAME_KEY = "username";
const USER_ID_KEY = "user_id";

export const getToken: () => Promise<string | null> = async () => {
    const [token] = await Promise.all([getItem(ACCESS_TOKEN_KEY)]);
    if (!token) return null;
    return token;
};

export const getUsername: () => Promise<string | null> = async () => {
    const [username] = await Promise.all([getItem(USERNAME_KEY)]);
    if (!username) return null;
    return username;
};

export const getUserID: () => Promise<string | null> = async () => {
    const [user_id] = await Promise.all([getItem(USER_ID_KEY)]);
    if (!user_id) return null;
    return user_id;
};

export const saveToken = (token: string) =>
    Promise.all([setItem(ACCESS_TOKEN_KEY, token)]);

export const saveUsername = (username: string) =>
    Promise.all([setItem(USERNAME_KEY, username)]);

export const saveUserID = (user_id: string) =>
    Promise.all([setItem(USER_ID_KEY, user_id)]);
