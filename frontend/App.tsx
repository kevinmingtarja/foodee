import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { theme, darkTheme, ThemeContext } from "./src/components/Theme";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App(): JSX.Element {
    // To-Do: Create Dark Mode
    const [darkMode] = useState<boolean>(false);

    const [fontsLoaded] = useFonts({
        Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
        PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
        regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
        semibold: require("./src/assets/fonts/Poppins-Medium.ttf"),
        bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    });

    if (!fontsLoaded) {
        // AppLoading is causing the:
        // [Unhandled promise rejection: Error: Native splash screen is already hidden. Call this method before rendering any view.]
        return <AppLoading />;
    }

    return (
        <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
            <StatusBar style="auto" />
            <RootNavigator />
        </ThemeContext.Provider>
    );
}
