import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingMain from "@screens/OnboardingMain";
import Landing from "@screens/Landing";
import Group from "@screens/Group";
import Matching from "@screens/Matching";
import Login from "@screens/Login";
import Register from "@screens/Register";
import CreateRoom from "@screens/CreateRoom";
import ShareCode from "@screens/ShareCode";
import JoinRoom from "@screens/JoinRoom";
import Results from "@screens/Results";

export type RootNavigatorParamList = {
    Onboarding: undefined;
    Landing: undefined;
    Group: undefined;
    Matching: undefined;
    Login: undefined;
    Register: undefined;
    CreateRoom: undefined;
    ShareCode: undefined;
    JoinRoom: undefined;
    Results: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

export default function RootNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Onboarding"} component={OnboardingMain} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"Register"} component={Register} />
                <Stack.Screen
                    name={"Landing"}
                    component={Landing}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen name={"Group"} component={Group} />
                <Stack.Screen name={"Matching"} component={Matching} />
                <Stack.Screen name={"CreateRoom"} component={CreateRoom} />
                <Stack.Screen name={"ShareCode"} component={ShareCode} />
                <Stack.Screen name={"JoinRoom"} component={JoinRoom} />
                <Stack.Screen name={"Results"} component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
