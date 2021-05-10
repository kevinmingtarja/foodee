import React from "react";
import { StyleSheet, View } from "react-native";

export default function Pagination({ pageIndex, numOfPages }) {
    return (
        <View style={styles.paginationWrapper}>
            {Array.from(Array(numOfPages).keys()).map((key, index) => (
                <View
                    style={[
                        styles.paginationDots,
                        { opacity: pageIndex === index ? 1 : 0.2 },
                    ]}
                    key={index}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    paginationWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: "#FC4041",
        marginLeft: 10,
    },
});
