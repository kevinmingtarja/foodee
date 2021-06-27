import { AxiosResponse } from "axios";
import request from "./request";

export const login = (data: {
    username: string;
    password: string;
}): Promise<AxiosResponse<Auth>> => request.post(`/auth/login`, data);

export const register = (data: {
    name: string;
    username: string;
    password: string;
}): Promise<AxiosResponse<Auth>> => request.post("/auth/register", data);
