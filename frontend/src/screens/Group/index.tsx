import React from "react"
import { View } from "react-native"
import { Button } from "@components/Button"
import { Text } from "@components/Components"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootNavigatorParamList } from "../../navigation/RootNavigator"

import styles from "./styles"

type LandingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  "Group"
>

interface Props {
  navigation: LandingScreenNavigationProp
}

const Group = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text variant="title" color="primary" style={{ marginTop: 30 }}>
        Foodee
      </Text>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => {
            navigation.navigate("CreateRoom")
          }}
          type="filled"
          size="large"
        >
          Create a Room
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("JoinRoom")
          }}
          type="filled"
          size="large"
          style={styles.btn2}
        >
          Join a Room
        </Button>
      </View>
    </View>
  )
}

export default Group
