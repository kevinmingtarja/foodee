import React, { useContext } from "react";
import { View, Dimensions, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ThemeContext } from "../Theme";

{
    /* <svg
    width="374"
    height="403"
    viewBox="0 0 374 403"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M176 377C99.6 321.8 26.8333 354 0 377V-2H375V356C340.5 386 252.4 432.2 176 377Z"
        fill="#FC4E4E"
    />
</svg>; */
}

export default function Wave2({
    customStyles,
}: {
    customStyles: ViewStyle;
}): JSX.Element {
    const theme = useContext(ThemeContext);
    const width = Dimensions.get("window").width;
    const ratio = width / 374;

    return (
        <View style={customStyles}>
            <View
                style={{
                    backgroundColor: theme.colors.background,
                    height: 100,
                    aspectRatio: 1,
                }}
            >
                <Svg
                    width={width}
                    height={403 * ratio}
                    viewBox="0 0 374 403"
                    preserveAspectRatio="xMinYMin slice"
                >
                    <Path
                        fill={theme.colors.background}
                        d="M176 377C99.6 321.8 26.8333 354 0 377V-2H375V356C340.5 386 252.4 432.2 176 377Z"
                    />
                </Svg>
            </View>
        </View>
    );
}
