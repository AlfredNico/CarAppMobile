import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./Home.styles"

export const HomeScreen: FC<any> = () => {
  return  <View style={styles.container}>
    <Text>Home Screen</Text>
  </View>
}