import { getItem, setItem, removeItem } from "@utils/storage";

const ACCESS_TOKEN_KEY = "access";
const USERNAME_KEY = "username";


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

export const saveToken = (token: string) =>
    Promise.all([setItem(ACCESS_TOKEN_KEY, token)]);

export const saveUsername = (username: string) =>
    Promise.all([setItem(USERNAME_KEY, username)]);
