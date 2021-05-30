import { getItem, setItem, removeItem } from "@utils/storage";

const ACCESS_TOKEN_KEY = "access";
const USERNAME_KEY = "username";

type Token = {
    access: string;
};

export const getToken: () => Promise<Token | null> = async () => {
    const [access] = await Promise.all([getItem(ACCESS_TOKEN_KEY)]);
    if (!access) return null;
    return { access };
};

export const getUsername: () => Promise<string | null> = async () => {
    const [username] = await Promise.all([getItem(USERNAME_KEY)]);
    if (!username) return null;
    return username;
};

export const saveToken = (token: Token) =>
    Promise.all([setItem(ACCESS_TOKEN_KEY, token.access)]);

export const saveUsername = (username: string) =>
    Promise.all([setItem(USERNAME_KEY, username)]);
