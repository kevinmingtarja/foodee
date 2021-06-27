import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { getRestaurants, getResults, getRoom } from "@api/main";
import { getUserID, getUsername } from "@utils/auth";
import { getRoomID, saveQuery, saveRoomID } from "@utils/room";

import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import { Box, Text } from "@components/Components";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import styles from "./styles";
import { ActivityIndicator } from "react-native";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "JoinRoom"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const Results = ({ navigation }: Props): JSX.Element => {
    const [roomID, setRoomID] = useState<string>("");
    const [roomIDError, setRoomIDError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Result[]>([]);
    const [restaurants, setRestaurants] = useState<Restaurant[]>();

    useEffect(() => {
        const fn = async () => {
            const roomID = await getRoomID();
            const query = await (await getRoom(parseInt(roomID, 10))).data
                .query;
            console.log(query);
            const res = await getRestaurants(query || "");
            setRestaurants(res.data as Restaurant[]);
        };
        fn();
    }, []);
    console.log(restaurants);

    const findNumOfPerson = () => {
        const map: { [key: string]: number } = {};
        let num = 0;
        for (let i = 0; i < results!.length; i++) {
            if (!(results[i].user_id in map)) {
                map[results[i].user_id] = 1;
                num++;
            }
        }
        return num;
    };

    const numPersons = findNumOfPerson();
    console.log("NUMPERSONS");
    console.log(numPersons);

    const createMap = () => {
        const map: { [key: string]: number } = {};
        for (let i = 0; i < results!.length; i++) {
            if (!(results[i].restaurant_id in map)) {
                map[results[i].restaurant_id] = 0;
            }
            map[results[i].restaurant_id]++;
        }
        return map;
    };

    const map = createMap();
    console.log(map);

    useEffect(() => {
        const fn = async () => {
            const res = await getResults(
                parseInt((await getRoomID()) || "", 10)
            );
            setResults(res.data);
        };

        fn();
    }, []);

    const onChangeID = (text: string) => {
        setRoomID(text);
        setRoomIDError("");
    };

    return (
        <Box backgroundColor="background2" style={styles.screen}>
            <Text variant="h1" color="primary">
                Results
            </Text>

            {results
                ?.filter((x) => map[x.restaurant_id] === numPersons && x.vote)
                .map((x) => (
                    <Text variant="h1" color="primary">
                        {restaurants?.[x.restaurant_id]?.name || ""}
                    </Text>
                ))}
        </Box>
    );
};

export default Results;
