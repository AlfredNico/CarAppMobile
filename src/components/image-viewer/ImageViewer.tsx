import { FC, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from './ImageViewer.styles';


export const ImageViewer: FC<{imageUrl: string}>  = ({imageUrl}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.imageContent}>
        {/* <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Image source={{ uri: imageUrl }} style={styles.imageThumbnail} />
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'column',  alignItems: 'center', }}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Image source={{ uri: imageUrl }} style={styles.imageThumbnail} />
            </TouchableOpacity>
        </View>

        <Modal visible={isModalVisible} transparent={true} animationType="fade">
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsModalVisible(false)}>
                <Image source={{ uri: imageUrl! }} style={styles.fullScreenImage} />
            </TouchableOpacity>
        </Modal>
  </View>
  );
};

