import { FC, useEffect, useRef, useState  } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput  } from 'react-native';
import styles from './FoodCard.styles';
// import Icon from "react-native-vector-icons/Icon";
import {MaterialCommunityIcons, Ionicons, Fontisto, AntDesign } from "react-native-vector-icons";
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av'; 

    
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



export const FoodCard: FC<any> = ({dataSource}) => {
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
  const [isDislike, setDislike] = useState(false);
  const handleLike = () => {
    setLiked(!isLiked);
    setInfo({
      ...info,
      user_ratings: {
        ...info.user_ratings,
        count_positive: isLiked? info.user_ratings.count_positive - 1 : info.user_ratings.count_positive + 1
      }
    });
  };

  const handleDislike = () => {
    setDislike(!isDislike);
    setInfo({
      ...info,
      user_ratings: {
        ...info.user_ratings,
        count_negative: isDislike? info.user_ratings.count_negative - 1 : info.user_ratings.count_negative + 1
      }
    });
  };

  const handleComment = () => {
    // console.log('Commented...');
    setIsInputVisible((prev) => !prev);

  }


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

  const videoRef = useRef<Video>(null);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <Image source={{ uri: info?.thumbnail_url || 'https://via.placeholder.com/150' }} style={styles.avatar} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={styles.name}>{info?.name || '...'}</Text>
            <Text>{info.created_at}</Text>
          </View>
          {/* <MaterialCommunityIcons name="dots-vertical" size={24} color="#000" /> */}
          <Text style={{ color: '#5cc9cdd9', fontSize: 20, fontWeight: 'bold' }}>Price: ${ info.price.total } </Text>
        </View>

        <Text style={styles.description}>{isExpanded ? info?.description : `${info?.description?.substring(0, maxChars)}...`}</Text>
       
        <TouchableOpacity onPress={toggleText}>
          <Text style={styles.toggleText}>
            {isExpanded ? 'See Less' : 'See More'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Image source={{ uri: info?.urls?.small || 'https://via.placeholder.com/150' }} style={styles.image} /> */}

      

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{ uri: info.original_video_url }} // Remote video URL
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onError={(e) => console.error('Error with video playback', e)} 
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {}}
          videoStyle={{width: '100%', height: 200}}
        />
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <AntDesign 
            name={isLiked ? "like1" : "like2"} 
            size={24} 
            color={isLiked ? "#5cc9cdd9" : "black"}
          />
          <Text style={styles.actionText}>{info?.user_ratings.count_positive} likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDislike} style={styles.actionButton}>
          <AntDesign 
            name={isDislike ? "dislike1" : "dislike2"} 
            size={24} 
            color={isDislike ? "#5cc9cdd9" : "black"} 
          />
          <Text style={styles.actionText}>{info?.user_ratings.count_negative} dislikes</Text>
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
