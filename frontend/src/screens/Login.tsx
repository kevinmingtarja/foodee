import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../navigation/RootNavigator";

import { Input } from "@components/Input";
import { BodyText, Heading } from "@components/Typography";
import { Button } from "@components/Button";
import { Color } from "@components/Color";
import { login } from "@api/auth";
import { saveToken, saveUsername } from "@utils/auth";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Login"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const Login = ({ navigation }: Props): JSX.Element => {
    const [username, setUsername] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const onChangeUsername = (text: string) => {
        setUsername(text);
        setUsernameError("");
    };

    const onChangePassword = (text: string) => {
        setPassword(text);
        setPasswordError("");
    };

    const onBlurUsername = () => {
        if (username === "") {
            setUsernameError("Please fill in.");
        }
    };

    const onBlurPassword = () => {
        if (password === "") {
            setPasswordError("Please fill in.");
        }
    };

    const handleLogin = async () => {
        const { data: token } = await login({
            username: username,
            password: password,
        });
        console.log(typeof token.token);
        console.log(token.token)
        saveToken(token.token);
        saveUsername(username);
        navigation.navigate("Landing");
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Heading
                    color="tartorange"
                    style={{
                        marginBottom: 30,
                        fontFamily: "PoppinsMedium",
                        fontSize: 30,
                    }}
                    centered
                >
                    {"Foodee"}
                </Heading>
                <Input
                    label=""
                    placeholder="Username"
                    style={styles.input}
                    value={username}
                    onChangeText={(text: string) => onChangeUsername(text)}
                    onBlur={onBlurUsername}
                    errorMessage={usernameError}
                />
                <Input
                    secureTextEntry
                    label=""
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChangeText={(text: string) => onChangePassword(text)}
                    onBlur={onBlurPassword}
                    errorMessage={passwordError}
                />
                <Button
                    size="large"
                    type="filled"
                    style={{ width: "100%", marginTop: 24 }}
                    onPress={handleLogin}
                >
                    {"Log In"}
                </Button>
            </View>

            <View style={styles.footer}>
                <BodyText>{"Don't have an account?"}</BodyText>
                <BodyText
                    weight="semibold"
                    color="cerulean"
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                >
                    {" Sign Up."}
                </BodyText>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        flex: 1,
    },
    container: {
        paddingHorizontal: 24,
        paddingTop: 220,
        flex: 0.875,
    },
    input: {
        marginTop: 8,
    },
    footer: {
        borderTopWidth: 1,
        borderColor: Color.tartorange,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.125,
    },
});
