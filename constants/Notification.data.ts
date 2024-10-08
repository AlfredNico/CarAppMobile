import { INotification } from "interfaces/INotification";


export const notificationsData: INotification[] = [
    {
      id: 1,
      title: 'John Doe',
      message: 'liked your post',
      time: '2 minutes ago',
      read: false,
      avatar: 'https://placekitten.com/50/50',
    },
    {
      id: 2,
      title: 'Anna Smith',
      message: 'commented on your photo',
      time: '10 minutes ago',
      read: false,
    },
    {
      id: 3,
      title: 'Mark Johnson',
      message: 'started following you',
      time: '1 hour ago',
      read: true,
    },
  ];