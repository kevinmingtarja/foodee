import React, { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Color, ColorName } from "../Color";
import { TextStyle } from "react-native";

export type IconProps = {
    color?: ColorName | string;
    name: ComponentProps<typeof Ionicons>["name"];
    onPress?: () => void;
    size?: number;
    style?: TextStyle;
};

export const Icon = (props: IconProps): JSX.Element => {
    const { color = "ash800", name, onPress, size = 24, style } = props;
    return (
        <Ionicons
            color={color in Color ? Color[color as ColorName] : color}
            name={name}
            onPress={onPress}
            size={size}
            style={style}
        />
    );
};
