import React, { useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Card } from "../components/Components"
import { Box } from "../components/Components"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootNavigatorParamList } from "../navigation/RootNavigator"

type LandingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  "Landing"
>

interface Props {
  navigation: LandingScreenNavigationProp
}

const Landing = ({ navigation }: Props): JSX.Element => {
  return (
    <Box
      backgroundColor="background2"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        image={require("../assets/solo1.png")}
        imgHeight={140}
        onPress={() => console.log("PRESSED")}
      >
        One Person
      </Card>
      <Card
        image={require("../assets/group6.png")}
        imgHeight={200}
        onPress={() => navigation.navigate("Group")}
      >
        Group
      </Card>
    </Box>
  )
}

export default Landing

const styles = StyleSheet.create({})
