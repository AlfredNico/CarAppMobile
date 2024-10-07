import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./MessageScreen.styles"

export const MessageScreen: FC<any> = () => {
  return  <View style={styles.container}>
    <Text>Message Screen</Text>
  </View>
}