import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonRow: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Space between the buttons
    width: width * 0.9, // Set the width of the row to 90% of the screen width
  },
  cardButton: {
    flex: 1, // Take up equal space
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for card effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4, // Android shadow effect
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  });