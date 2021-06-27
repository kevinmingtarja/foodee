import React from "react";
import { View, Image } from "react-native";
import { Text } from "../Components";

import styles from "./styles";

export const Card = ({
    id,
    alias,
    name,
    image_url,
    is_closed,
    url,
    review_count,
    categories,
    rating,
    coordinates,
    transactions,
    price,
    location,
    phone,
    display_phone,
    distance,
}: Restaurant): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image_url }} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
                <Text variant="h1" color="background">
                    {name}
                </Text>

                <Text variant="body" color="background">
                    {`${location.address1}, ${location.address2}`}
                </Text>
                <View style={styles.row}>
                    <Text variant="body" color="background">
                        {price}
                    </Text>
                    <Text variant="body" color="background">
                        {" • "}
                    </Text>
                    <Text variant="body" color="background">
                        {`${rating} ⭐️ (${review_count})`}
                    </Text>
                </View>

                <Text variant="body" color="background">
                    {display_phone}
                </Text>
            </View>
        </View>
    );
};
