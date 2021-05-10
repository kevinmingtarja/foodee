import React, { useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Touchable,
} from "react-native";
import { Button, Box } from "../components/Components";

import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Pagination from "../components/Pagination";

export default function OnboardingMain({ navigation }) {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get("window");
    const scrollRef = useRef();

    const onPressNext = (initialX) => {
        if (initialX < width * 2) {
            scrollRef.current.scrollTo({
                x: initialX + width,
                animated: true,
            });
            return;
        }

        // navigation.navigate("Last");
    };

    const onGetStarted = () => {
        navigation.navigate("Landing");
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: "Profile" }],
        // });
    };

    const setSliderPage = ({ x }) => {
        const { currentPage } = sliderState;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };

    const { currentPage: pageIndex } = sliderState;

    return (
        <Box style={{ flex: 1 }} backgroundColor="foreground">
            <ScrollView
                ref={scrollRef}
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setSliderPage(event.nativeEvent.contentOffset);
                }}
            >
                <Onboarding1 />
                <Onboarding2 />
                <Onboarding3 />
            </ScrollView>
            {pageIndex >= 2 ? (
                <View style={{ paddingBottom: 100 }}>
                    <Button
                        style={{ marginLeft: 50 }}
                        onPress={() => onGetStarted()}
                        size="large"
                        type="filled"
                    >
                        Get Started
                    </Button>
                </View>
            ) : (
                <View style={styles.bottom}>
                    <Pagination pageIndex={pageIndex} numOfPages={3} />
                    <Button
                        style={{ marginLeft: 50 }}
                        onPress={() => onPressNext(width * pageIndex)}
                        size="small"
                        type="filled"
                    >
                        Next
                    </Button>
                </View>
            )}
        </Box>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 100,
    },
});
