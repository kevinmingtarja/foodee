import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    paddingTop: 50,
    height: height,
    alignItems: "center",
  },
  btnContainer: {
    marginTop: height - 300,
  },
  btn2: {
    marginTop: 16,
  },
})

export default styles
