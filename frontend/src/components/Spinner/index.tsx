import React from "react";
import { ActivityIndicator, StyleSheet, ViewStyle } from "react-native";

import { Color, ColorName } from "../Color";

export type SpinnerProps = {
    centered?: boolean;
    color?: ColorName;
    style?: ViewStyle;
};

export const Spinner = (props: SpinnerProps) => {
    const { centered, color = "cerulean", style } = props;
    return (
        <ActivityIndicator
            color={Color[color]}
            style={[centered && StyleSheet.absoluteFill, style]}
        />
    );
};
