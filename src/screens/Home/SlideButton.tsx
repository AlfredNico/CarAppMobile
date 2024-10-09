import React, { useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet } from 'react-native';

const SlideButton = () => {
  const [slideAnim] = useState(new Animated.Value(0)); // Animation state
  const [isSliding, setIsSliding] = useState(false);

  // PanResponder to track drag gestures
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dx > 0 && gestureState.dx < 200) {
        slideAnim.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > 150) {
        // If dragged far enough, slide it to the end
        Animated.spring(slideAnim, {
          toValue: 200,
          useNativeDriver: false,
        }).start();
        setIsSliding(true);
      } else {
        // If not dragged far enough, reset to 0
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
        setIsSliding(false);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slide to Continue</Text>
      <View style={styles.sliderContainer}>
        <Animated.View
          style={[
            styles.sliderTrack,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
          {...panResponder.panHandlers}>
          <View style={styles.sliderCircle}>
            <Text style={styles.sliderText}>{isSliding ? '✔' : '→'}</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sliderContainer: {
    width: 300,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  sliderTrack: {
    flexDirection: 'row',
    backgroundColor: '#28a745',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  sliderCircle: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  sliderText: {
    fontSize: 20,
    color: '#007bff',
  },
});

export default SlideButton;
