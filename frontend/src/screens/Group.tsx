import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../navigation/RootNavigator";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Group"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const Group = ({ navigation }: Props): JSX.Element => {
    return (
        <View>
            <Text>Group Screen</Text>
        </View>
    );
};

export default Group;

const styles = StyleSheet.create({});
