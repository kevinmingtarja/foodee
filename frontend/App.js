import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Dimensions, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { theme, darkTheme, ThemeContext } from "./src/components/Theme";
import RootNavigator from "./src/navigation/Root";

export default function App() {
    // To-Do: Create Dark Mode
    const [darkMode, setDarkMode] = useState(false);

    let [fontsLoaded] = useFonts({
        Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
        PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    });

    if (!fontsLoaded) {
        // AppLoading is causing the:
        // [Unhandled promise rejection: Error: Native splash screen is already hidden. Call this method before rendering any view.]
        return <AppLoading />;
    }

    return (
        <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
            <SafeAreaView style={styles.OuterContainer}>
                <StatusBar style="auto" />
                <SafeAreaView style={styles.container}>
                    <RootNavigator />
                </SafeAreaView>
            </SafeAreaView>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    OuterContainer: {
        flex: 1,
        backgroundColor: "#FC4E4E",
    },
    container: {
        height: Dimensions.get("window").height,
        backgroundColor: "#fff",
    },
});
