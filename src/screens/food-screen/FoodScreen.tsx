import { FC, useEffect, useRef, useState } from "react"
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { apiService } from "services/apiService";
import { FoodCard } from "components/food-card/FoodCard";
import { styles } from "./FoodScreen.styles";
import Toast from "react-native-toast-message";
import { Ionicons } from "react-native-vector-icons";


const fetchData = async () => {
  const pathUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
  const headers = {
    'Content-Type': 'application/json',
    'x-rapidapi-key': '21f4233c8emsh95db32faaff5112p158945jsnf78236e26469',
    'x-rapidapi-host':  'tasty.p.rapidapi.com'
  };
  const result = await apiService.fetchData(pathUrl, headers);
  return result.results as any[];
  
};



export const FoodScreen: FC<any> = () => {

  const [showRefresh, setShowRefresh] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pauseVideo, setPauseVideo] = useState(false);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Buffer of 20 pixels
    setShowRefresh(isAtBottom);

    // Scroll event to pause the video
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    if (contentOffsetY > 50) {
      setPauseVideo(true);
    } else {
      setPauseVideo(false);
    }
  };

  const refreshContent = () => {
    setData([]);
    setShowRefresh(false);
    setIsLoading(false);

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
      const fetchDataAsync = async () => {
        try {
          const response = await fetchData();
          const newData = response.map(data => {
          const { description, name, original_video_url, thumbnail_url, price, keywords, user_ratings, id, created_at, updated_at } = data;
          return { description, name, original_video_url, thumbnail_url, price, keywords, user_ratings, id, created_at, updated_at };
        });
        setData(newData);
        } finally {
          setIsLoading(true);
        }
      }
      fetchDataAsync();
      // setIsLoading(true);
    }
  };

  useEffect(() => {
    setShowRefresh(false);
    if (isLoading) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        bottomOffset: 50,
        text1: 'Something went wrong!',
        text2: 'Unable to fetch data. Please try again later.',
        visibilityTime: 4000,
        autoHide: true,
        props: {
          style: styles.toastStyle,
        },
      });
    }
  }, [isLoading]);


  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        const newData = response.map(data => {
        const { description, name, original_video_url, thumbnail_url, price, keywords, user_ratings, id, created_at, updated_at } = data;
        return { description, name, original_video_url, thumbnail_url, price, keywords, user_ratings, id, created_at, updated_at };
      });
      setData(newData);
      } finally {
        setIsLoading(true);
      }
    }
    fetchDataAsync();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} ref={scrollViewRef}>
        { isLoading
          ? data.map((item, i:number) => 
            <FoodCard dataSource={item} pauseVideo={pauseVideo} key={i} />
          ) : <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.loadingText}>Loading data...</Text>
        </View>
        }
        
       </ScrollView>
 
       {(showRefresh && isLoading) && (
         <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.buttonRefs} onPress={refreshContent}>
            <Ionicons name="refresh" size={24} color="#fff" />
             <Text style={styles.buttonText}>Refresh...</Text>
           </TouchableOpacity>
         </View>
       )}
     </View>
  )
}