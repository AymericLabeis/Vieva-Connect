import React, { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

export default function ExampleModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      {/* Bouton pour ouvrir la modal */}
      <Pressable
        onPress={() => setModalVisible(true)}
        className="bg-blue-500 px-5 py-2 rounded-xl"
      >
        <Text className="text-white text-lg font-semibold">Ouvrir la modal</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-80 shadow-lg">
            <Text className="text-xl font-bold mb-4 text-center">Titre de la modal</Text>
            <Text className="text-gray-700 mb-4 text-center">
              Ceci est le contenu de la modal.
            </Text>
            <Pressable
              onPress={() => setModalVisible(false)}
              className="bg-red-500 px-4 py-2 rounded-lg mt-2 self-center"
            >
              <Text className="text-white font-medium">Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
