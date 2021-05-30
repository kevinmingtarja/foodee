import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingMain from "../screens/OnboardingMain";
import Landing from "../screens/Landing";
import Group from "../screens/Group";
import Matching from "../screens/Matching";

export type RootNavigatorParamList = {
    Onboarding: undefined;
    Landing: undefined;
    Group: undefined;
    Matching: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

export default function RootNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Onboarding"} component={OnboardingMain} />
                <Stack.Screen
                    name={"Landing"}
                    component={Landing}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen name={"Group"} component={Group} />
                {/* <Stack.Screen name={"Matching"} component={Matching} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
