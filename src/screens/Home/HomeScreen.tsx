import { FC, useEffect, useRef, useState } from "react"
import { ActivityIndicator, Button, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./HomeScreen.styles"
import { CarCard } from "components/car/CarCard";
import cars from "./../../../constants/car-data.json";
import { apiService } from "services/apiService";
import { FoodCard } from "components/food-card/FoodCard";


const fetchData = async () => {
  const pathUrl = 'https://api.unsplash.com/photos/random?client_id=tE7UOZI-TDa9p_z6KPlwNVO9y58FkbkO3NJ3ivX10qE&query=cars';
  const result = await apiService.fetchData(pathUrl);

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
};

// const fetchData = async () => {
//   const pathUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
//   const result = await apiService.fetchData(pathUrl);
//   return result.results as any[];
// };



export const HomeScreen: FC<any> = () => {

  const [showRefresh, setShowRefresh] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Buffer of 20 pixels
    setShowRefresh(isAtBottom);
  };

  const refreshContent = () => {
    setShowRefresh(false);
    setData([]);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });


      console.log('Start');
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
    console.log('Start');
    const fetchDataAsync = async () => {
      // Array.from({length: 5}, async(_, index) => {
      //   const newData = await fetchData();
      //   setData((prevData) => [...prevData, newData]);
      // });

      await Promise.all(
        Array.from({ length: 5 }, async (_, index) => {
          const newData = await fetchData();
          setData((prevData) => [...prevData, newData]);
        })
      );
      setIsLoading(true);
    }
    fetchDataAsync();
    
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} ref={scrollViewRef}>
        {/* {Array.from({ length: 50 }, (_, i) => (
          <Text key={i} style={styles.content}>{`Item ${i + 1}`}</Text>
        ))} */}

        {
          isLoading 
          ? data.map((item, i:number) => 
            <CarCard dataSource={item} key={i} />
            // <FoodCard dataSource={item} key={i} />
          ) : <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.loadingText}>Loading data...</Text>
        </View>
        }
        
      </ScrollView>

      {showRefresh && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonRefs} onPress={refreshContent}>
            <Text style={styles.buttonText}>Refresh...</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}