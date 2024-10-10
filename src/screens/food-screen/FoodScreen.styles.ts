import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonContainer: {
        position: 'absolute',
        top: 60,
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        zIndex: 1, 
      },

      buttonRefs: {
        backgroundColor: '#5cc9cdd9',
        padding: 10,
        borderRadius: 10,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        flexDirection: 'row',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10,
      },
      loadingContainer: {
        justifyContent: 'center', 
        alignItems: 'center',  
        backgroundColor: '#5cc9cdd9',
        paddingHorizontal: 20, 
        paddingVertical: 5,
        margin: 20,
        width: 'auto', 
        alignSelf: 'center', 
        borderRadius: 10,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      loadingText: {
        marginTop: 10, 
        fontSize: 16, 
        color: '#fff',
      },
      toastStyle: {
        position: 'absolute',
        right: 20,
        left: 'auto',
        width: 'auto',
        marginBottom: 50,
      },
});