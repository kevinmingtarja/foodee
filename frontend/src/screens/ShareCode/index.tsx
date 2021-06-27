import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { getRoomID } from "@utils/room";

import { RootNavigatorParamList } from "../../navigation/RootNavigator";
import { Box, Text } from "@components/Components";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import styles from "./styles";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Matching"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const CreateRoom = ({ navigation }: Props): JSX.Element => {
    const [roomID, setRoomID] = useState("0");
    const handleNext = () => {
        navigation.navigate("Matching");
    };

    useEffect(() => {
        const fn = async () => {
            const id = await getRoomID();
            console.log(id);
            setRoomID(id);
        };
        fn();
    }, []);

    return (
        <Box backgroundColor="background2" style={styles.screen}>
            <Text variant="h1" color="primary">
                Share Code
            </Text>

            <Text variant="h1" color="primary">
                {roomID}
            </Text>

            <Button
                size="large"
                type="filled"
                styles={{ width: "100%", marginTop: 24 }}
                onPress={handleNext}
            >
                Start Picking
            </Button>
        </Box>
    );
};

export default CreateRoom;
