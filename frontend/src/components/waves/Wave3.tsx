import React, { useContext } from "react";
import { View, Dimensions, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ThemeContext } from "../Theme";

{
    /* <svg
    width="374"
    height="410"
    viewBox="0 0 374 410"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M130.5 356C73.7 331.2 19.8333 345.667 0 356V-2H374V399.5C279.5 429.5 201.5 387 130.5 356Z"
        fill="#FC4E4E"
    />
</svg>; */
}

export default function Wave3({
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
                    height={410 * ratio}
                    viewBox="0 0 374 410"
                    preserveAspectRatio="xMinYMin slice"
                >
                    <Path
                        fill={theme.colors.background}
                        d="M130.5 356C73.7 331.2 19.8333 345.667 0 356V-2H374V399.5C279.5 429.5 201.5 387 130.5 356Z"
                    />
                </Svg>
            </View>
        </View>
    );
}
