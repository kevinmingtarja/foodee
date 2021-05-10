import React from "react";

const palette = {
    white: "#fff",
    jet: "#2D2D2D",
    spacecadet: "#2B2D42",
    independence: "#404355",
    blackcoral: "#5D6275",
    manatee: "#8D99AE",
    aliceblue: "#EDF2F4",
    lighttartorange: "#FC4E4E",
    tartorange: "#FC4041",
    green: "#24DD64",
    red: "#24DD64",
};

export const theme = {
    colors: {
        background: palette.lighttartorange,
        foreground: palette.white,
        primary: palette.tartorange,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        title: {
            fontFamily: "PoppinsMedium",
            fontSize: 40,
            color: "#fff",
            textAlign: "center",
        },
        header: {
            fontFamily: "Raleway",
            fontSize: 36,
            fontWeight: "bold",
        },
        body: {
            fontFamily: "Merriweather",
            fontSize: 16,
        },
    },
};

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white,
    },
};

export const ThemeContext = React.createContext({});
