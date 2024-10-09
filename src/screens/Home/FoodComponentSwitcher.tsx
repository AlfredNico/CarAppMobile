import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodListContainer: {
    width: '100%',  // Full width for the scrollable area
    marginBottom: 20,
  },
  foodList: {
    paddingVertical: 10,
  },
  foodButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    minWidth: 120, // Ensure the buttons are large enough
  },
  selectedButton: {
    backgroundColor: '#28a745', // Green for selected button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  foodComponent: {
    fontSize: 18,
    color: '#333',
    padding: 20,
  },
});

const foodTypes = [
  { id: '1', name: 'Pizza' },
  { id: '2', name: 'Burger' },
  { id: '3', name: 'Pasta' },
  { id: '4', name: 'Sushi' },
  { id: '5', name: 'Salad' },
];

const foodComponents = {
  Pizza: <Text style={styles.foodComponent}>🍕 Pizza Component</Text>,
  Burger: <Text style={styles.foodComponent}>🍔 Burger Component</Text>,
  Pasta: <Text style={styles.foodComponent}>🍝 Pasta Component</Text>,
  Sushi: <Text style={styles.foodComponent}>🍣 Sushi Component</Text>,
  Salad: <Text style={styles.foodComponent}>🥗 Salad Component</Text>,
};

const FoodComponentSwitcher = () => {
  const [selectedFoodType, setSelectedFoodType] = useState<keyof typeof foodComponents>('Pizza');

  const renderFoodButton = ({ item }: { item: { name: string } }) => (
    <TouchableOpacity
      style={[
        styles.foodButton,
        selectedFoodType === item.name ? styles.selectedButton : null,
      ]}
      onPress={() => setSelectedFoodType(item.name as keyof typeof foodComponents)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Food</Text>
      <View style={styles.foodListContainer}>
        <FlatList
          horizontal
          data={foodTypes}
          keyExtractor={(item) => item.id}
          renderItem={renderFoodButton}
          contentContainerStyle={styles.foodList}
        />
      </View>
      {foodComponents[selectedFoodType]}
    </View>
  );
};

export default FoodComponentSwitcher;
