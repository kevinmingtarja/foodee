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
} from "../Theme";

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
