import React, { useContext } from "react";
import { View, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ThemeContext } from "../Theme";

{
    /* <svg
    width="375"
    height="470"
    viewBox="0 0 375 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M257.5 450.5C165.1 495.7 47.3333 449.667 0 421V0H376V376C375 382 349.9 405.3 257.5 450.5Z"
        fill="#FC4E4E"
    />
    <path
        d="M545 376C471.4 334.8 410.333 358.833 389 376V0H763V359.5C721 382.167 618.6 417.2 545 376Z"
        fill="#FC4E4E"
    />
</svg>; */
}

export default function Wave1({ customStyles }) {
    const theme = useContext(ThemeContext);
    const width = Dimensions.get("window").width;
    const ratio = width / 375;

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
                    height={470 * ratio}
                    viewBox="0 0 375 470"
                    preserveAspectRatio="xMinYMin slice"
                >
                    <Path
                        fill={theme.colors.background}
                        d="M257.5 450.5C165.1 495.7 47.3333 449.667 0 421V0H376V376C375 382 349.9 405.3 257.5 450.5Z"
                    />
                </Svg>
            </View>
        </View>
    );
}
