import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Card } from "../components/Components";

const Landing = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 200 }}>
            <Card
                image={require("../assets/food.png")}
                body="BODY"
                onPress={() => console.log("PRESSED")}
            >
                Single Person
            </Card>
            <Card
                image={require("../assets/food.png")}
                body="BODY"
                onPress={() => navigation.navigate("Group")}
            >
                Group
            </Card>
        </View>
    );
};

export default Landing;

const styles = StyleSheet.create({});
