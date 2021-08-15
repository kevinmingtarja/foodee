import React, { useState, useEffect } from "react"
import { ActivityIndicator } from "react-native"
import SwipeCards from "react-native-swipe-cards-deck"

import { getRestaurants, postVote, getRoom } from "@api/main"
import { getQuery, getRoomID } from "@utils/room"
import { getUserID, getUsername } from "@utils/auth"

import { StackNavigationProp } from "@react-navigation/stack"
import { RootNavigatorParamList } from "../../navigation/RootNavigator"
import { Box, Button, Text } from "@components/Components"
import { Card } from "@components/Card"

import styles from "./styles"

type LandingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  "Matching"
>

interface Props {
  navigation: LandingScreenNavigationProp
}

const Matching = ({ navigation }: Props): JSX.Element => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>()
  const [location, setLocation] = useState("")

  useEffect(() => {
    const fn = async () => {
      const query = await getQuery()
      setLocation(query?.slice(9, query?.indexOf(",")))
    }
  })

  useEffect(() => {
    const fn = async () => {
      const roomID = await getRoomID()
      const query = await (await getRoom(parseInt(roomID, 10))).data.query
      console.log(query)
      const res = await getRestaurants(query || "")
      setRestaurants(res.data as Restaurant[])
    }
    fn()
  }, [])

  const handleYes = async (card: Restaurant) => {
    const newArr = restaurants?.filter((x) => x.id !== card.id)
    setRestaurants(newArr)
    try {
      const roomID = await getRoomID()
      console.log(roomID)
      const vote = await postVote(
        {
          alias: card.alias,
          name: card.name,
          image_url: card.image_url,
          url: card.url,
          review_count: card.review_count,
          rating: card.rating,
          price: card.price,
          phone: card.phone,
          display_phone: card.display_phone,
          address1: card.location.address1,
          address2: card.location.address2,
          address3: card.location.address3 || "",
          city: card.location.city,
          zip_code: card.location.zip_code,
          country: card.location.country,
          state: card.location.state,
          vote: true,
          user_id: (await getUserID()) || "",
          username: (await getUsername()) || "",
        },
        parseInt(roomID as string, 10)
      )
      console.log(vote)
      console.log("yes")
    } catch (e) {
      console.log(e)
    }
  }

  const handleNo = async (card: Restaurant) => {
    const newArr = restaurants?.filter((x) => x.id !== card.id)
    setRestaurants(newArr)
    try {
      const roomID = await getRoomID()
      console.log(roomID)
      await postVote(
        {
          alias: card.alias,
          name: card.name,
          image_url: card.image_url,
          url: card.url,
          review_count: card.review_count,
          rating: card.rating,
          price: card.price,
          phone: card.phone,
          display_phone: card.display_phone,
          address1: card.location.address1,
          address2: card.location.address2,
          address3: card.location.address3 || "",
          city: card.location.city,
          zip_code: card.location.zip_code,
          country: card.location.country,
          state: card.location.state,
          vote: false,
          user_id: (await getUserID()) || "",
          username: (await getUsername()) || "",
        },
        parseInt(roomID as string, 10)
      )
      console.log("no")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box backgroundColor="background2" style={styles.screen}>
      <Text variant="h1" color="primary">
        Discover
      </Text>

      <Text variant="h2" color="primary">
        {}
      </Text>

      {restaurants ? (
        <SwipeCards
          cards={restaurants}
          renderCard={(restaurant: Restaurant) => <Card {...restaurant} />}
          keyExtractor={(restaurant: Restaurant) => restaurant.id}
          renderNoMoreCards={() => (
            <Text color="primary" variant="h1">
              Out of cards{" "}
            </Text>
          )}
          actions={{
            nope: { onAction: handleNo, show: false },
            yup: {
              onAction: handleYes,
              show: false,
            },
          }}
          smoothTransition={true}
          // If you want a stack of cards instead of one-per-one view, activate stack mode
          // stack={true}
          // stackDepth={5}
          // stackOffsetX={0}
          // stackOffsetY={-20}
          dragY={false}
        />
      ) : (
        <ActivityIndicator style={styles.spinner} />
      )}
      <Button
        size="large"
        type="filled"
        onPress={() => {
          navigation.navigate("Results")
        }}
        styles={styles.btn}
      >
        {"Join Room"}
      </Button>
    </Box>
  )
}

export default Matching
