import React from "react";
import { Text, View } from "react-native";
import { Button } from "@components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../navigation/RootNavigator";

import styles from "./styles";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Group"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const Group = ({ navigation }: Props): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>Group Screen</Text>

            <View style={styles.btnContainer}>
                <Button
                    onPress={() => {
                        navigation.navigate("CreateRoom");
                    }}
                    type="filled"
                    size="large"
                    styles={styles.btn}
                >
                    Create a Room
                </Button>
                <Button
                    onPress={() => {
                        navigation.navigate("JoinRoom");
                    }}
                    type="filled"
                    size="large"
                    styles={styles.btn2}
                >
                    Join a Room
                </Button>
            </View>
        </View>
    );
};

export default Group;
