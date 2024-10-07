import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CarCard.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

    
interface Car {
  id?: number;
  nm: string;
  imgUrl: string;
  desc: string;
  avatarUrl: string;
  usrNm: string;
}

interface ICarPros {
  car: Car;
}



export const CarCard: FC<ICarPros> = ({car}) => {

  const handleLike = () => {
    console.log('Liked');
  };

  const handleComment = () => {
    console.log('Commented');
  };

  const handleShare = () => {
    console.log('Shared');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <Image source={{ uri: car.imgUrl }} style={styles.avatar} />
          <Text style={styles.name}>{car.usrNm}</Text>
        </View>
        <Text style={styles.description}>{car.desc}</Text>
      </View>
      <Image source={{ uri: car.imgUrl }} style={styles.image} />
      
       <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Icon name="thumb-up" size={24} color="#000" />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.actionButton}>
          <Icon name="comment" size={24} color="#000" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
          <Icon name="share" size={24} color="#000" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
