import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../navigation/RootNavigator";
import { Box, Text } from "../components/Components";

import Card from "../components/Card";
import data from "../assets/MockRestaurants";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Matching"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

const Matching = ({ navigation }: Props): JSX.Element => {
    const [currRestaurant, setCurrRestaurant] = useState(data[0]);
    return (
        <Box
            backgroundColor="background2"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Card
                name={currRestaurant.name}
                stars={currRestaurant.stars}
                reviews={currRestaurant.reviews}
                category={currRestaurant.category}
                distance={currRestaurant.distance}
                price={currRestaurant.price}
            />
        </Box>
    );
};

const styles = StyleSheet.create({});

export default Matching;
