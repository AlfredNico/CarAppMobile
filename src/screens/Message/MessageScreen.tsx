import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./MessageScreen.styles"
import { Notification } from "components/notification/Notification"

export const MessageScreen: FC<any> = () => {
  return  <View>
    <Notification />
  </View>
}