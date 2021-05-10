import React from "react";

const palette = {
    white: "#fff",
    jet: "#2D2D2D",
    spacecadet: "#2B2D42",
    independence: "#404355",
    blackcoral: "#5D6275",
    manatee: "#8D99AE",
    aliceblue: "#EDF2F4",
    lightgrey: "#6A6A6A",
    lighttartorange: "#FC4E4E",
    tartorange: "#FC4041",
    green: "#24DD64",
    red: "#24DD64",
};

export const theme = {
    colors: {
        background: palette.lighttartorange,
        foreground: palette.white,
        primaryText: palette.jet,
        secondaryText: palette.lightgrey,
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
            textAlign: "center",
        },
        h1: {
            fontFamily: "PoppinsMedium",
            fontSize: 22,
            margin: 8,
        },
        h2: {
            fontFamily: "Poppins",
            fontSize: 16,
        },
        subheading: {},
        body: {
            fontFamily: "PoppinsMedium",
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
