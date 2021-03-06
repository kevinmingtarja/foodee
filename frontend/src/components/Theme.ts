import React from "react";

const palette = {
    white: "#fff",
    jet: "#2D2D2D",
    spacecadet: "#2B2D42",
    independence: "#404355",
    blackcoral: "#5D6275",
    manatee: "#8D99AE",
    aliceblue: "#EDF2F4",
    grey: "#6A6A6A",
    lightgrey: "#E8E8E8",
    lighttartorange: "#FC4E4E",
    tartorange: "#FC4041",
    green: "#24DD64",
    red: "#24DD64",
};

export type colorsType =
    | "background"
    | "background2"
    | "foreground"
    | "primaryText"
    | "secondaryText"
    | "primary"
    | "success"
    | "danger"
    | "failure"
    | "darkerforeground";

export const theme = {
    colors: {
        background: palette.lighttartorange,
        background2: palette.lightgrey,
        foreground: palette.white,
        primaryText: palette.jet,
        secondaryText: palette.grey,
        primary: palette.tartorange,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
        darkerforeground: palette.aliceblue,
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
        // background: palette.black,
        foreground: palette.white,
    },
};

export type spacingsType = "s" | "m" | "l" | "xl";

export type textVariantsType = "title" | "h1" | "h2" | "subheading" | "body";

export interface themeType {
    colors: {
        background: string;
        background2: string;
        foreground: string;
        primaryText: string;
        secondaryText: string;
        primary: string;
        success: string;
        danger: string;
        failure: string;
        darkerforeground: string;
    };
    spacing: {
        s: number;
        m: number;
        l: number;
        xl: number;
    };
    textVariants: {
        title: {
            fontFamily: string;
            fontSize: number;
            textAlign: string;
        };
        h1: {
            fontFamily: string;
            fontSize: number;
        };
        h2: {
            fontFamily: string;
            fontSize: number;
        };
        subheading: {};
        body: {
            fontFamily: string;
            fontSize: number;
        };
    };
}

export const ThemeContext = React.createContext<themeType>({} as themeType);
