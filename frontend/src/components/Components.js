import React, { useContext } from "react";
import {
    View,
    Text as RNText,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";

import { ThemeContext } from "./Theme";

export const Box = ({ style, padding, margin, backgroundColor, ...rest }) => {
    const theme = useContext(ThemeContext);

    return (
        <View
            style={{
                margin: theme.spacing[margin],
                padding: theme.spacing[padding],
                backgroundColor: theme.colors[backgroundColor],
                ...style,
            }}
            {...rest}
        />
    );
};

export const Text = ({ style, variant, color, ...rest }) => {
    const theme = useContext(ThemeContext);

    return (
        <RNText
            style={{
                color: theme.colors[color],
                ...theme.textVariants[variant],
                ...style,
            }}
            {...rest}
        />
    );
};

const width = Dimensions.get("window").width;

export const Button = ({
    style,
    color,
    onPress,
    type,
    size,
    children,
    ...rest
}) => {
    const theme = useContext(ThemeContext);

    const btnSize = size === "large" ? width / 1.3 : width / 3;

    const btnBgColor = type === "filled" ? theme.colors.primary : "transparent";
    const btnTextColor =
        type === "filled" ? theme.colors.foreground : theme.colors.primary;

    const border = type === "outlined" && {
        borderColor: theme.colors.primary,
        borderWidth: 2,
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    paddingVertical: 14,
                    borderRadius: 8,
                    backgroundColor: btnBgColor,
                    width: btnSize,
                    ...border,
                    ...style,
                }}
            >
                <RNText
                    style={{
                        color: btnTextColor,
                        fontSize: 16,
                        textAlign: "center",
                        fontFamily: "PoppinsBold",
                    }}
                >
                    {children}
                </RNText>
            </View>
        </TouchableOpacity>
    );
};

export const Card = ({
    style,
    color,
    image,
    onPress,
    children,
    body,
    ...rest
}) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: 300,
                height: 200,
                backgroundColor: "white",
                shadowRadius: 8,
                shadowOpacity: 0.2,
                shadowColor: "#757575",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                elevation: 5,
                borderRadius: 10,
                padding: 10,
            }}
        >
            <Image
                source={image}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <Text variant="h1" color="primaryText">
                {children}
            </Text>
            <Text variant="body" color="primaryText">
                {body}
            </Text>
        </TouchableOpacity>
    );
};