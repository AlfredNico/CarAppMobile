import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexGrow: 1, // Ensures content can grow with scrolling
    paddingTop: 10, // Adds space below the header
    paddingHorizontal: 20, // Horizontal padding for content
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9, // 90% of the screen width
    // marginBottom: 20,
    marginVertical: 10
  },
  cardButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#5cc9cdd9', // Active button color (green)
  },
  activeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  componentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  componentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});