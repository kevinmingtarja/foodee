import React from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { Text } from "../components/Components";

interface Props {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    categories: string[];
    coordinates: string;
    phoneNumber: string;
    hours: string;
    isClaimed: boolean;
    isClosed: boolean;
    price: number;
    imageURL: string;
}

const Card = ({
    id,
    name,
    rating,
    reviewCount,
    categories,
    coordinates,
    phoneNumber,
    hours,
    isClaimed,
    isClosed,
    price,
    imageURL,
}: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <View style={styles.textContainer}>
                <Text variant="h1" color="background">
                    Text Container
                </Text>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: height * 0.6,
        backgroundColor: "black",
        borderRadius: 15,
    },
    imageContainer: {
        height: "85%",
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textContainer: {},
});

export default Card;
