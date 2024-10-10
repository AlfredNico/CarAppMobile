import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./SettingScreen.styles"
import { SettingCard } from "components/setting-card/SettingCard"
import { Footer } from "components/footer/Footer"

export const SettingScreen: FC<any> = () => {
  return  <View style={styles.container}>
    <View style={styles.content}>
        <SettingCard />
      </View>

    <View style={styles.footer}>
      <Footer />
    </View>
  </View>
}