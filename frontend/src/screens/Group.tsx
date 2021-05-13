import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../navigation/RootNavigator";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Group"
>;

interface props {
    navigation: LandingScreenNavigationProp;
}

const Group = ({ navigation }: props): JSX.Element => {
    return (
        <View>
            <Text>Group Screen</Text>
        </View>
    );
};

export default Group;

const styles = StyleSheet.create({});
