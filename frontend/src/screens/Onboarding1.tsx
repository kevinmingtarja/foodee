import React, { useContext } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Text } from "../components/Components";

import Wave from "../components/waves/Wave1";
import { ThemeContext } from "../components/Theme";

export default function Onboarding1(): JSX.Element {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Wave customStyles={styles.svgCurve} />
            <View style={styles.headerContainer}>
                <Text
                    variant="title"
                    color="foreground"
                    style={{ marginBottom: 30 }}
                >
                    Foodee
                </Text>
                <Image
                    source={require("../assets/food.png")}
                    style={{
                        width: "100%",
                        resizeMode: "contain",
                        height: "65%",
                    }}
                />
                <View style={{ flex: 1, marginTop: 0 }}>
                    <Text
                        variant="h1"
                        color="primaryText"
                        style={{ textAlign: "center" }}
                    >
                        Find The Best Restaurant
                    </Text>
                    <Text
                        variant="h2"
                        color="secondaryText"
                        style={{
                            textAlign: "center",
                            marginHorizontal: 40,
                        }}
                    >
                        Find The Best Restaurant that is suitable for everyone
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
    },
    headerContainer: {
        marginTop: Dimensions.get("window").height * 0.1,
        marginHorizontal: 10,
    },
    svgCurve: {
        position: "absolute",
        width: Dimensions.get("window").width,
    },
});
