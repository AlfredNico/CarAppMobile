import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

interface HeaderProps {
    navigation: any;
}

export const Header: FC<HeaderProps> = ({ navigation }) => {

  // const isFocused = useIsFocused();
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;

    return (
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('assets/logo/car_logo.png')} style={styles.logo} />
          <Text style={styles.title}>Car lover's</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons  name={currentRoute === 'Home' ? 'home' : 'home-outline'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <MaterialCommunityIcons name={currentRoute === 'Message' ? 'message-processing' : 'message-processing-outline'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Ionicons name={currentRoute === 'Setting' ? 'settings' : 'settings-outline'} size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };