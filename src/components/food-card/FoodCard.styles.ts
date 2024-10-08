import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f200',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    // textAlign: 'center',
  },

  content: {
    marginVertical: 10,
    width: '100%'
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    // backgroundColor: '#007AFF', // Change the color as needed
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    color: 'blue',
    marginTop: 5,
    fontWeight: 'bold',
  },

  videoContainer: {
    // position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300, // Taille fixe pour éviter le débordement
    backgroundColor: '#f0f0f0',
  },
  video: {
    // width: '100%',
    // height: 200,
    // borderRadius: 10,
    // marginBottom: 10,
    width: 300,  // La vidéo prendra toute la largeur du conteneur
    height: undefined,
    aspectRatio: 16 / 9,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 10,
  },
  playButtonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default styles;