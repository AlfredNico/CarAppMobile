
import { FC, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { notificationsData } from "../../../constants/Notification.data";
import { INotification } from "interfaces/INotification";
import { styles } from "./Notification.styles";


export const Notification: FC = () => {
  const [notifications, setNotifications] = useState<INotification[]>(notificationsData);

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const renderItem = ({ item }: { item: INotification }) => (
    <View style={[styles.notificationCard, item.read && styles.readNotification]}>
      <View style={styles.avatarContainer}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}
      </View>

      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>

      {!item.read && (
        <TouchableOpacity
          style={styles.markAsReadButton}
          onPress={() => markAsRead(item.id)}
        >
          <Text style={styles.markAsReadText}>Mark as read</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  
  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.notificationList}
    />
  )
};
