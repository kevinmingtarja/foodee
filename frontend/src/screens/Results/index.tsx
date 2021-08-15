import React, { useEffect, useLayoutEffect, useState } from "react"
import { StackNavigationProp } from "@react-navigation/stack"

import { getRestaurant, getResults, getRoom } from "@api/main"
import { getUserID, getUsername } from "@utils/auth"
import { getRoomID, saveQuery, saveRoomID } from "@utils/room"

import { RootNavigatorParamList } from "../../navigation/RootNavigator"
import { Box, Text } from "@components/Components"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import styles from "./styles"
import { ActivityIndicator, View } from "react-native"

type LandingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  "Results"
>

interface Props {
  navigation: LandingScreenNavigationProp
}

type FinalResult = {
  name: string
  user_id: string
}

const Results = ({ navigation }: Props): JSX.Element => {
  const [map, setMap] = useState<{ [key: string]: number }>()
  const [numPersons, setNumPersons] = useState<number>()
  const [results, setResults] = useState<FinalResult[]>([])

  const findNumOfPerson = (results: FinalResult[]) => {
    const map: { [key: string]: number } = {}
    let num = 0
    for (let i = 0; i < results.length; i++) {
      if (!(results[i].user_id in map)) {
        map[results[i].user_id] = 1
        num++
      }
    }
    return num
  }

  const createMap = (results: FinalResult[]) => {
    const map: { [key: string]: number } = {}
    for (let i = 0; i < results.length; i++) {
      if (!(results[i].name in map)) {
        map[results[i].name] = 0
      }
      map[results[i].name]++
    }
    return map
  }

  useEffect(() => {
    const fn = async () => {
      const res = await getResults(parseInt((await getRoomID()) || "", 10))
      console.log(res)
      const raw = res.data
      const results = []
      for (let i = 0; i < raw.length; i++) {
        if (raw[i].vote) {
          const restaurant = await getRestaurant(raw[i].restaurant_id)
          results.push({
            name: restaurant.data.name,
            user_id: raw[i].user_id,
          })
        }
      }
      setResults(results)
      setNumPersons(findNumOfPerson(results))
      setMap(createMap(results))
    }
    fn()
  }, [])

  console.log("------")
  console.log(results)
  console.log(numPersons)
  console.log(map)

  const duplicates: { [key: string]: number } = {}

  return (
    <Box backgroundColor="background2" style={styles.screen}>
      <Text variant="h1" color="primary">
        Results
      </Text>

      <View style={styles.container}>
        {results.length !== 0 && map && numPersons ? (
          <>
            {results
              .filter((result) => map[result.name] === numPersons)
              .map((result) => {
                if (!(result.name in duplicates)) {
                  duplicates[result.name] = 1
                  return (
                    <Text variant="h1" color="primary">
                      {result.name}
                    </Text>
                  )
                }
              })}
          </>
        ) : (
          <ActivityIndicator style={{ position: "absolute", top: "50%" }} />
        )}
      </View>
    </Box>
  )
}

export default Results
