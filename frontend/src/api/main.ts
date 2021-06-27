/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from "axios";
import request from "./request";
import useRequest from "./swr";

export const getRestaurants = (query: string) =>
    request.get(`/api/restaurants?${query}`);

export const getRestaurant = (id: string) =>
    request.get(`/api/restaurants/${id}`);

export const createRoom = (data: {
    user_id: string;
    username: string;
    query: string;
}): Promise<AxiosResponse<CreateRoom>> => request.post("/api/rooms", data);

export const getRoom = (room_id: number) =>
    request.get(`/api/rooms/${room_id}`);

export const joinRoom = (
    data: {
        user_id: string;
    },
    room_id: number
) => request.post(`/api/rooms/${room_id}`, data);

export const deleteRoom = (room_id: number) =>
    request.delete(`/api/rooms/${room_id}`);

export const leaveRoom = (data: { user_id: string; room_id: string }) =>
    // Have to use config.data to set request body and headers
    request.delete("/api/rooms", { data: data });

export const postVote = (data: Vote, room_id: number) =>
    request.post(`/api/rooms/${room_id}/vote`, data);

export const getResults = (room_id: number) =>
    request.get<Result[]>(`/api/rooms/${room_id}/results`);
