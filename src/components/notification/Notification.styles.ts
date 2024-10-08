import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notificationList: {
    backgroundColor: '#f9f9f9',
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  readNotification: {
    backgroundColor: '#f0f0f0',
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
  markAsReadButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  markAsReadText: {
    color: '#fff',
    fontSize: 12,
  },
});