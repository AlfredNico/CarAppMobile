import { FC, useRef, useState } from "react"
import { Button, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./HomeScreen.styles"
import { CarCard } from "components/car/CarCard";
import cars from "./../../../constants/car-data.json";


const { height } = Dimensions.get('window');


export const HomeScreen: FC<any> = () => {

  const [showRefresh, setShowRefresh] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [data, setData] = useState<string[]>([]);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Buffer of 20 pixels
    setShowRefresh(isAtBottom);
  };

  const fetchData = async () => {
    return new Promise<string[]>(resolve =>
      setTimeout(() => {
        resolve(['New Data 1', 'New Data 2', 'New Data 3']);
      }, 2000)
    );
  };

  const refreshContent = async () => {
    const newData = await fetchData();
    setData(newData);
    setShowRefresh(false);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} ref={scrollViewRef}>
        {Array.from({ length: 50 }, (_, i) => (
          <Text key={i} style={styles.content}>{`Item ${i + 1}`}</Text>
          // <CarCard key={i} />
        ))}
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