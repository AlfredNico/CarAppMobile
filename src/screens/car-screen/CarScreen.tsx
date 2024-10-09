import { FC, useEffect, useRef, useState } from "react"
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { CarCard } from "components/car/CarCard";
import { apiService } from "services/apiService";
import Toast from 'react-native-toast-message';
import { styles } from "./CarSreen.styles";
import { Ionicons } from "react-native-vector-icons";

const fetchData = async () => {
  const pathUrl = 'https://api.unsplash.com/photos/random?client_id=tE7UOZI-TDa9p_z6KPlwNVO9y58FkbkO3NJ3ivX10qE&query=cars';
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const result = await apiService.fetchData(pathUrl, headers);

    const { urls, user, id, description, likes, created_at } = result;
    const newData = {
        id,
        description: description,
        likes,
        created_at,
        urls: {
          small: urls.small
        },
        user: {
          profile_image: user.profile_image.medium,
          name: user.name,
          id: user.id,
          username: user.username
        }
      };
    return newData;
  } catch (error) {
    throw error;
  }
};

export const CarScreen: FC<any> = () => {
  const [showRefresh, setShowRefresh] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Buffer of 20 pixels
    setShowRefresh(isAtBottom);
  };

  const refreshContent = () => {
    setData([]);
    setShowRefresh(false);
    setIsLoading(false);

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
      
      const fetchDataAsync = async () => {
        Array.from({length: 5}, async(_, index) => {
          const newData = await fetchData();
          setData((prevData) => [...prevData, newData]);
        });
      }
      fetchDataAsync();
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await Promise.all(
        Array.from({ length: 5 }, async (_, index) => {
          try {
            const newData = await fetchData();
            setData((prevData) => [...prevData, newData]);
          } catch (error: any) {
            setError(error.message);
          }
        })
      );
      setIsLoading(true);
      setShowRefresh(false);
    }
    fetchDataAsync();
    
  }, []);

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

  return (
    <View style={{ flex: 1 }}>        
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} ref={scrollViewRef}>
        {
          isLoading 
          ? data.map((item, i:number) => 
            <CarCard dataSource={item} key={i} />
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

      <Toast />
    </View>
  )
}