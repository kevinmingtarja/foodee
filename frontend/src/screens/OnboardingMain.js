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

import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Pagination from "../components/Pagination";

export default function Onboarding() {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get("window");
    const scrollRef = useRef();

    const onPressNext = (initialX) => {
        scrollRef.current.scrollTo({
            x: initialX + width,
            animated: true,
        });
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
        <>
            <SafeAreaView style={{ flex: 1 }}>
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
                <View style={{ paddingBottom: 100 }}>
                    <Pagination pageIndex={pageIndex} numOfPages={3} />
                    <TouchableOpacity
                        onPress={() => onPressNext(width * pageIndex)}
                    >
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
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
});
