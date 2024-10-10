import React, { FC, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderProps {
  notificationsCount?: number;
  navigation: any;
}

export const Header: FC<HeaderProps> = ({ navigation}) => {
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;
  const [notificationsCount, setNotificationsCount] = useState<number>(2);
  // const handleNotificationClick = () => {
  //   navigation.navigate('Message');
  // }

  useEffect(() => {
    if (currentRoute === 'Message') {
      setNotificationsCount(0);
    }
    
    // const fetchNotifications = async () => {
    //   const newNotificationsCount = await getUnreadNotifications();
    //   setNotificationsCount(newNotificationsCount);
    // };

    // fetchNotifications();
  }, []);

  // const getUnreadNotifications = async () => {
  //   return 5;
  // };

    return (
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <Image source={require('assets/logo/car_logo.png')} style={styles.logo} /> */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('assets/logo/car_logo.png')} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.title} onPress={() => navigation.navigate('Home')}>e-Activity</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons  name={currentRoute === 'Home' ? 'home' : 'home-outline'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')} style={{ position: 'relative' }}>
            <MaterialCommunityIcons name={currentRoute === 'Message' ? 'message-processing' : 'message-processing-outline'} size={25} color="black" />
            {notificationsCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationsCount}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Ionicons name={currentRoute === 'Setting' ? 'settings' : 'settings-outline'} size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };