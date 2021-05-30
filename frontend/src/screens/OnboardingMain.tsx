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
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../navigation/RootNavigator";

import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Pagination from "../components/Pagination";

type LandingScreenNavigationProp = StackNavigationProp<
    RootNavigatorParamList,
    "Onboarding"
>;

interface Props {
    navigation: LandingScreenNavigationProp;
}

export default function OnboardingMain({ navigation }: Props): JSX.Element {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get("window");
    const scrollRef = useRef<ScrollView>(null);

    const onPressNext = (initialX: number) => {
        if (initialX < width * 2) {
            // Strict null checks Typescript
            if (scrollRef && scrollRef.current) {
                scrollRef.current.scrollTo({
                    x: initialX + width,
                    animated: true,
                });
            }
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

    const setSliderPage = ({ x }: { x: number }) => {
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
                <View style={{ paddingBottom: 90 }}>
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
        paddingBottom: 90,
    },
});
