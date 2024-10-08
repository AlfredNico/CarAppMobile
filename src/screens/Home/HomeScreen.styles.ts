import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonContainer: {
        position: 'absolute',
        // bottom: 20,
        // right: 20,


        top: 60,
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        zIndex: 1, // Ensure button is on top
      },


      content: {
        padding: 20,
        fontSize: 18,
      },

      buttonRefs: {
        backgroundColor: '#5cc9cdd9', // Button color
        padding: 10,
        borderRadius: 10, // Border radius
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
});