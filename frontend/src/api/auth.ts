import request from "./request";

export const login = (data: { username: string; password: string }) =>
    request.post(`/auth/login`, data);

export const register = (data: {
    name: string;
    username: string;
    password: string;
}) => request.post("/auth/register", data);
