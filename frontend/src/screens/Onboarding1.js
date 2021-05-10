import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import Wave from "../components/waves/Wave1";
import { ThemeContext } from "../components/Theme";

export default function Onboarding1() {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Wave customStyles={styles.svgCurve} />
            <View style={styles.headerContainer}>
                <Text style={theme.textVariants.title}>Foodee</Text>
                <Image
                    source={require("../assets/food.png")}
                    style={{
                        width: "100%",
                        resizeMode: "contain",
                        height: "65%",
                    }}
                />
                <Text>Find The Best Restaurant</Text>
                <Text>
                    Find The Best Restaurant that is suitable for everyone
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        marginTop: 50,
        marginHorizontal: 10,
    },
    svgCurve: {
        position: "absolute",
        width: Dimensions.get("window").width,
    },
});
