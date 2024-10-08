import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    accordionContainer: {
        // marginVertical: 5,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 1, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      accordionHeader: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      accordionTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
      },
      accordionContent: {
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
      },
      accordionIcon: {
        marginRight: 10,
      },
});