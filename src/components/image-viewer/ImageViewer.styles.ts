import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageContent: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    // padding: 20,
  },

  imageThumbnail: {
    width: width - 70,
    // width: width * 1.5,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  fullScreenImage: {
    // width: '100%',
    // height: '100%',
    width: width,    // Set the full width of the screen
    height: height,  // Set the full height of the screen
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },
  closeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});