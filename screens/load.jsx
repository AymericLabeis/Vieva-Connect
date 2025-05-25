import React, { useState } from 'react';
import { View, Text, Modal, Pressable, ActivityIndicator } from 'react-native';

export default function LoadingModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);

    // Simule un chargement de 3 secondes
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      {/* Bouton d’ouverture */}
      <Pressable
        onPress={openModal}
        className="bg-blue-600 px-6 py-3 rounded-xl"
      >
        <Text className="text-white text-lg font-semibold">Afficher le chargement</Text>
      </Pressable>

      {/* Modal de chargement */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 items-center justify-center">
          <View className="bg-white rounded-2xl p-6 items-center justify-center w-72 shadow-lg">
            <ActivityIndicator size="large" color="#32465a" />
            <Text className="mt-4 text-lg text-gray-800">Chargement en cours...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
