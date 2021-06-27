import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { joinRoom } from "@api/main";
import { getUserID, getUsername } from "@utils/auth";
import { saveQuery, saveRoomID } from "@utils/room";

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

const JoinRoom = ({ navigation }: Props): JSX.Element => {
    const [roomID, setRoomID] = useState<string>("");
    const [roomIDError, setRoomIDError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const onChangeID = (text: string) => {
        setRoomID(text);
        setRoomIDError("");
    };

    const onBlurID = () => {
        if (roomID === "") {
            setRoomIDError("Please fill in.");
        }
    };

    const handleJoin = async () => {
        setLoading(true);
        onBlurID();
        try {
            if (!roomID) {
                throw new Error();
            }
            const { data } = await joinRoom(
                {
                    user_id: (await getUserID()) || "",
                },
                parseInt(roomID, 10)
            );
            await saveRoomID(data.room_id);
            navigation.navigate("Matching");
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    return (
        <Box backgroundColor="background2" style={styles.screen}>
            <Text variant="h1" color="primary">
                Join Room
            </Text>

            <Input
                label="Room ID"
                placeholder="Enter room ID"
                style={styles.input}
                value={roomID}
                onChangeText={(text: string) => onChangeID(text)}
                onBlur={onBlurID}
                errorMessage={roomIDError}
            />
            <>
                <Button
                    size="large"
                    type="filled"
                    onPress={handleJoin}
                    styles={styles.btn}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        "Join Room"
                    )}
                </Button>
            </>
        </Box>
    );
};

export default JoinRoom;
