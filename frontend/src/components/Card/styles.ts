import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: height * 0.7,
        backgroundColor: "black",
        borderRadius: 15,
    },
    imageContainer: {
        height: "75%",
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    img: {
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textContainer: {
        paddingTop: 8,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
