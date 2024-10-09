import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { CarScreen } from 'screens/car-screen/CarScreen';
import { FoodScreen } from 'screens/food-screen/FoodScreen';
import { styles } from './HomeScreen.styles';
import { Ionicons } from "react-native-vector-icons";

export const HomeScreen: FC<any> = () => {
  const [activeComponent, setActiveComponent] = useState<'FoodScreen' | 'CarScreen'>('CarScreen');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.cardButton,
            activeComponent === 'CarScreen' ? styles.activeButton : null,
          ]}
          onPress={() => setActiveComponent('CarScreen')}
        >
          <Ionicons name={"car-sport-sharp"} size={25} />
          <Text style={[
             activeComponent === 'FoodScreen' ? styles.buttonText : styles.activeButtonText,
          ]}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cardButton,
            activeComponent === 'FoodScreen' ? styles.activeButton : null,
          ]}
          onPress={() => setActiveComponent('FoodScreen')}
        >
          <Ionicons name={"fast-food-sharp"} size={25} />
          <Text style={[
            activeComponent === 'CarScreen' ? styles.buttonText : styles.activeButtonText,
          ]}>Foods</Text>
        </TouchableOpacity>
      </View>
      
      {activeComponent === 'FoodScreen' && <FoodScreen />}
      {activeComponent === 'CarScreen' && <CarScreen />}
    </SafeAreaView>
  );
};
