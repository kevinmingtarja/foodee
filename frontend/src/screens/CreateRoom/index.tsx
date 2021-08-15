import React, { useState } from "react"
import { StackNavigationProp } from "@react-navigation/stack"

import { createRoom } from "@api/main"
import { getUserID, getUsername } from "@utils/auth"
import { saveQuery, saveRoomID } from "@utils/room"

import { RootNavigatorParamList } from "../../navigation/RootNavigator"
import { Box, Text } from "@components/Components"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Select } from "@components/Select"

import styles from "./styles"
import { ActivityIndicator } from "react-native"

type LandingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  "CreateRoom"
>

interface Props {
  navigation: LandingScreenNavigationProp
}

const CreateRoom = ({ navigation }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const [location, setLocation] = useState<string>("")
  const [locationError, setLocationError] = useState<string>("")

  const [categories, setCategories] = useState<string>("")
  const [categoriesError, setCategoriesError] = useState<string>("")

  const [price, setPrice] = useState("1, 2, 3, 4")

  const onChangeLocation = (text: string) => {
    setLocation(text)
    setLocationError("")
  }

  const onChangeCategories = (text: string) => {
    setCategories(text)
    setCategoriesError("")
  }

  const onBlurLocation = () => {
    if (location === "") {
      setLocationError("Please fill in.")
    }
  }

  const onBlurCategories = () => {
    if (categories === "") {
      setCategoriesError("Please fill in.")
    }
  }

  const handleCreate = async () => {
    setLoading(true)
    try {
      if (!location || !categories) throw new Error("Please fill in")
      console.log({
        user_id: (await getUserID()) || "",
        username: (await getUsername()) || "",
        query: `term=restaurants&location=${location},Singapore&categories=${categories}&price=${price}`,
      })
      const { data } = await createRoom({
        user_id: (await getUserID()) || "",
        username: (await getUsername()) || "",
        query: `term=restaurants&location=${location},Singapore&categories=${categories}&price=${price}`,
      })
      await saveRoomID(data.room_id)

      saveQuery(
        `term=restaurants&location=${location},Singapore&categories=${categories}&price=${price}`
      )
      navigation.navigate("ShareCode")
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  return (
    <Box backgroundColor="background2" style={styles.screen}>
      <Text variant="h1" color="primary">
        Create Room
      </Text>

      <Input
        label="Location"
        placeholder="Search for restaurants near ..."
        style={styles.input}
        value={location}
        onChangeText={(text: string) => onChangeLocation(text)}
        onBlur={onBlurLocation}
        errorMessage={locationError}
      />
      <Input
        label="Categories"
        placeholder="What kind of food are you in the mood for?"
        style={styles.input}
        value={categories}
        onChangeText={(text: string) => onChangeCategories(text)}
        onBlur={onBlurCategories}
        errorMessage={categoriesError}
      />
      <Select
        label="Maximum Price Range"
        value={price}
        onChange={(value: string) => setPrice(value)}
        items={[
          {
            label: "$",
            value: "1",
          },
          {
            label: "$$",
            value: "1, 2",
          },
          {
            label: "$$$",
            value: "1, 2, 3",
          },
          {
            label: "$$$$",
            value: "1, 2, 3, 4",
          },
        ]}
        style={styles.input}
      />
      <>
        <Button
          size="large"
          type="filled"
          onPress={handleCreate}
          style={styles.btn}
        >
          {loading ? <ActivityIndicator color="white" /> : "Create Room"}
        </Button>
      </>
    </Box>
  )
}

export default CreateRoom
