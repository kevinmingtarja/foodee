import { getItem, setItem, removeItem } from "@utils/storage";

const QUERY_KEY = "query";
const ROOM_ID_KEY = "room_id";

export const getQuery: () => Promise<string | null> = async () => {
    const [query] = await Promise.all([getItem(QUERY_KEY)]);
    if (!query) return null;
    return query;
};

export const saveQuery = (query: string) =>
    Promise.all([setItem(QUERY_KEY, query)]);

export const getRoomID: () => Promise<string | null> = async () => {
    const [roomID] = await Promise.all([getItem(ROOM_ID_KEY)]);
    console.log("ROOMID " + roomID);
    if (!roomID) return null;
    return roomID;
};

export const saveRoomID = (room_id: string) =>
    Promise.all([setItem(ROOM_ID_KEY, room_id)]);
