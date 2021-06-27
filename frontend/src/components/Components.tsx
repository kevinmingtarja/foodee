import React, { useContext } from "react";
import {
    View,
    Text as RNText,
    TouchableOpacity,
    Dimensions,
    Image,
    ViewStyle,
    ImageSourcePropType,
    TextStyle,
} from "react-native";

import {
    ThemeContext,
    themeType,
    colorsType,
    spacingsType,
    textVariantsType,
} from "./Theme";

export interface BoxProps {
    /** CSS Styles */
    style?: React.CSSProperties;
    padding?: spacingsType;
    children: React.ReactNode;
    margin?: spacingsType;
    backgroundColor: colorsType;
    rest?: string[];
}

export const Box = ({
    style,
    children,
    padding, // Default Arguments
    margin,
    backgroundColor,
    ...rest
}: BoxProps): JSX.Element => {
    const theme = useContext(ThemeContext);

    return (
        <View
            style={
                {
                    margin: margin ? theme.spacing[margin] : 0,
                    padding: padding ? theme.spacing[padding] : 0,
                    backgroundColor: theme.colors[backgroundColor],
                    ...style,
                } as ViewStyle
            }
            {...rest}
        >
            {children}
        </View>
    );
};

export interface TextProps {
    children: React.ReactNode;
    style?: TextStyle;
    variant: textVariantsType;
    color: colorsType;
    rest?: string[];
}

export const Text = ({
    children,
    style,
    variant,
    color,
    ...rest
}: TextProps): JSX.Element => {
    const theme = useContext(ThemeContext);

    return (
        <RNText
            style={
                [
                    {
                        color: theme.colors[color],
                        ...theme.textVariants[variant],
                    },
                    style,
                ] as ViewStyle
            }
            {...rest}
        >
            {children}
        </RNText>
    );
};

export interface ButtonProps {
    style: React.CSSProperties;
    color?: colorsType;
    onPress: () => void;
    type: "filled" | "outlined";
    size: "small" | "large";
    children: React.ReactNode;
}

const width = Dimensions.get("window").width;

export const Button = ({
    style,
    color,
    onPress,
    type,
    size,
    children,
    ...rest
}: ButtonProps): JSX.Element => {
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
                style={
                    {
                        paddingVertical: 14,
                        borderRadius: 8,
                        backgroundColor: btnBgColor,
                        width: btnSize,
                        ...border,
                        ...style,
                    } as ViewStyle
                }
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

export interface Card {
    style?: React.CSSProperties;
    color?: colorsType;
    image: ImageSourcePropType;
    onPress: () => void;
    children: React.ReactNode;
    body?: string;
    imgHeight: number;
    rest?: string[];
}

export const Card = ({
    style,
    color,
    image,
    onPress,
    children,
    body,
    imgHeight,
    ...rest
}: Card): JSX.Element => {
    const theme = useContext(ThemeContext);
    const { width, height } = Dimensions.get("window");

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                justifyContent: "center",
                alignItems: "center",
                width: 0.75 * width,
                height: 0.3 * height,
                backgroundColor: "white",
                shadowRadius: 5,
                shadowOpacity: 0.2,
                shadowColor: "#757575",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                elevation: 5,
                borderRadius: 12.5,
                marginVertical: 40,
                paddingTop: height * 0.01,
                paddingHorizontal: width * 0.015,
            }}
        >
            <Box
                backgroundColor="background"
                style={{
                    width: "100%",
                    height: "75%",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 7.5,
                }}
            >
                <Image
                    source={image}
                    style={{
                        width: width,
                        height: imgHeight,
                        resizeMode: "contain",
                    }}
                />
            </Box>
            <Text variant="h1" color="primaryText">
                {children}
            </Text>
            <Text variant="body" color="primaryText">
                {body}
            </Text>
        </TouchableOpacity>
    );
};
