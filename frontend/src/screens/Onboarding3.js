import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Text } from "../components/Components";
import { Button } from "../components/Components";

import Wave from "../components/waves/Wave3";

export default function Onboarding3() {
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
                    source={require("../assets/group.png")}
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
                        Placeholder
                    </Text>
                    <Text
                        variant="h2"
                        color="secondaryText"
                        style={{
                            textAlign: "center",
                            marginHorizontal: 40,
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </Text>
                </View>
            </View>
            {/* <View style={{ paddingTop: 30 }}>
                <Button
                    style={{ marginLeft: 50 }}
                    onPress={() => onPressNext(width * pageIndex)}
                    size="large"
                    type="filled"
                >
                    Get Started
                </Button>
            </View> */}
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
