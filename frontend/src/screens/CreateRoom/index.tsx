import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { createRoom } from "@api/main";
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
    "CreateRoom"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const CreateRoom = ({ navigation }: Props): JSX.Element => {
    const [location, setLocation] = useState<string>("");
    const [locationError, setLocationError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState<string>("");
    const [categoriesError, setCategoriesError] = useState<string>("");

    const onChangeLocation = (text: string) => {
        setLocation(text);
        setLocationError("");
    };

    const onChangeCategories = (text: string) => {
        setCategories(text);
        setCategoriesError("");
    };

    const onBlurLocation = () => {
        if (location === "") {
            setLocationError("Please fill in.");
        }
    };

    const onBlurCategories = () => {
        if (categories === "") {
            setCategoriesError("Please fill in.");
        }
    };

    const handleCreate = async () => {
        setLoading(true);
        try {
            console.log({
                user_id: (await getUserID()) || "",
                username: (await getUsername()) || "",
                query: `location=${location},Singapore&categories=${categories}`,
            });
            const { data } = await createRoom({
                user_id: (await getUserID()) || "",
                username: (await getUsername()) || "",
                query: `location=${location},Singapore&categories=${categories}`,
            });
            await saveRoomID(data.room_id);

            saveQuery(`location=${location}&categories=${categories}`);
            navigation.navigate("ShareCode");
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    return (
        <Box backgroundColor="background2" style={styles.screen}>
            <Text variant="h1" color="primary">
                Create Room
            </Text>

            <Input
                label="Location"
                placeholder="Search for restaurants near ..."
                style={styles.input}
                value={location}
                onChangeText={(text: string) => onChangeLocation(text)}
                onBlur={onBlurLocation}
                errorMessage={locationError}
            />
            <Input
                label="Categories"
                placeholder="What kind of food are you in the mood for?"
                style={styles.input}
                value={categories}
                onChangeText={(text: string) => onChangeCategories(text)}
                onBlur={onBlurCategories}
                errorMessage={categoriesError}
            />
            <>
                <Button
                    size="large"
                    type="filled"
                    onPress={handleCreate}
                    styles={styles.btn}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        "Create Room"
                    )}
                </Button>
            </>
        </Box>
    );
};

export default CreateRoom;
