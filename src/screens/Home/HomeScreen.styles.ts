import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
});