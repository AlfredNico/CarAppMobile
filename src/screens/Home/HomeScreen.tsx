import { FC, useState } from "react"
import { Button, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./HomeScreen.styles"
import { CarCard } from "components/car/CarCard";
import cars from "./../../../constants/car-data.json";


const { height } = Dimensions.get('window');


export const HomeScreen: FC<any> = () => {

  const [showRefresh, setShowRefresh] = useState(false);

  const handleScroll = (event: any) => {
    // const offsetY = event.nativeEvent.contentOffset.y;
    // const contentHeight = event.nativeEvent.contentSize.height;
    
    // // Show refresh button when scrolled to the bottom
    // if (offsetY + height >= contentHeight) {
    //   setShowRefresh(true);
    // } else {
    //   setShowRefresh(false);
    // }
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Buffer of 20 pixels

    setShowRefresh(isAtBottom);
  };

  const refreshContent = () => {
    // Implement your refresh logic here
    console.log("Refresh content!");
    setShowRefresh(false); // Hide the button after refresh
  };


  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView>
          {[1, 2, 3, 4, 5, 6, 7].map(car => (
            <CarCard key={car} />
          ))}
      </ScrollView> */}

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {Array.from({ length: 50 }, (_, i) => (
          <Text key={i} style={styles.content}>{`Item ${i + 1}`}</Text>
        ))}
      </ScrollView>

      {showRefresh && (
        <View style={styles.buttonContainer}>
          {/* <Button title="Refresh..." onPress={refreshContent} /> */}
          <TouchableOpacity style={styles.buttonRefs} onPress={refreshContent}>
            <Text style={styles.buttonText}>Refresh...</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}