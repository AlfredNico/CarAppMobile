import { FC, useState  } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput  } from 'react-native';
import styles from './CarCard.styles';
import {MaterialCommunityIcons, Ionicons, Fontisto } from "react-native-vector-icons";
import { ImageViewer } from 'components/image-viewer/ImageViewer';


    
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

type InfoType = {
  [key: string]: any;
};



export const CarCard: FC<any> = ({dataSource}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [comment, setComment] = useState('');

  // comment option
  const handleSubmit = () => {
    if (comment.trim()) {
      setComment(''); 
      setIsInputVisible(false);
    }
  };
  const handleCommentChange = (text: string) => {
    setComment(text);
  };

  // like option
  const [isLiked, setLiked] = useState(false);
  const handleLike = () => {
    // console.log('Liked');
    setLiked(!isLiked);
    setInfo({
      ...info,
      likes: isLiked? info.likes - 1 : info.likes + 1,
    });
  };

  const handleComment = () => {
    // console.log('Commented...');
    setIsInputVisible((prev) => !prev);

  };

  const handleShare = () => {
    console.log('Shared');
  };


  const [info, setInfo] = useState<InfoType>(dataSource);

  // text max length
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 100;
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <Image source={{ uri: info?.user?.profile_image || 'https://via.placeholder.com/150' }} style={styles.avatar} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={styles.name}>{info?.user?.name || '...'}</Text>
            <Text>{info.created_at}</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#000" />
        </View>

        <Text style={styles.description}>{isExpanded ? info?.description : `${info?.description?.substring(0, maxChars)}...`}</Text>
       
        <TouchableOpacity onPress={toggleText}>
          <Text style={styles.toggleText}>
            {isExpanded ? 'See Less' : 'See More'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Image source={{ uri: info?.urls?.small || 'https://via.placeholder.com/150' }} style={styles.image} /> */}

      <ImageViewer imageUrl={info?.urls?.small} />
      
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Ionicons 
          name={isLiked ? "heart" : "heart-outline"} 
          size={24} 
          color={isLiked ? "red" : "black"} 
        />
          <Text style={styles.actionText}>{info?.likes} likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.actionButton}>
          <MaterialCommunityIcons name={!isInputVisible ? "comment-processing-outline":"comment-processing"} size={24} color="#000" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={24} color="#000" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>

      {isInputVisible && (
        <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Write a comment..."
              value={comment}
              onChangeText={handleCommentChange}
              onSubmitEditing={handleSubmit}
              returnKeyType="done"
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
              <Fontisto name="paper-plane" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
    </View>
  );
};
