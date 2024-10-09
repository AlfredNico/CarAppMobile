import { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { styles } from "./CardButtonRow.styles";

export const CardButtonRow: FC = () => {
    return (
      <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
      );
}