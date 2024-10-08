import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./SettingScreen.styles"
import { SettingCard } from "components/setting-card/SettingCard"

export const SettingScreen: FC<any> = () => {
  return  <View style={styles.container}>
    <SettingCard />
  </View>
}