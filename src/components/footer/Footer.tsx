import { FC } from "react";
import { styles } from "./Footer.styles";
import { Text } from "react-native";
import Constants from 'expo-constants';

export const Footer: FC = () => {
    const appName = "e-Activity lover's";
    const appVersion = Constants.manifest.version;
  
    return (
    <Text style={styles.footerText}>
    © {new Date().getFullYear()} {appName} - Version {appVersion}
    </Text>
    );
  };