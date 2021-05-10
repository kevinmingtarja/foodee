import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Wave from "../components/waves/Wave2";

export default function Onboarding2() {
    return (
        <View style={styles.container}>
            <Wave customStyles={styles.svgCurve} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Custom Header</Text>
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
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        // change the color property for better output
        color: "black",
        textAlign: "center",
        marginTop: 35,
    },
});
