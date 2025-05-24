import React from 'react';
import { Modal, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function HelpModal({ visible, onClose, onConfirm, title, message }) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black bg-opacity-60">
        <View
          className="rounded-xl bg-primary shadow-xl"
          style={{
            width: windowWidth * 0.9,
            maxWidth: 700, 
          }}
        >
          {/* Modal Header */}
          <View className="px-4 py-4">
            <Text className="text-[#FFB84D] text-3xl font-bold">{title}</Text>
          </View>

          {/* Modal Body */}
          <View className="px-4 py-6">
            <Text className="text-white text-center text-2xl">{message}</Text>
          </View>

          {/* Modal Footer */}
          <View className="flex-row justify-end mt-5 px-6 py-4">
            <TouchableOpacity
              onPress={onClose}
              className="px-4 py-2 rounded-lg border border-white bg-red-600 me-4"
            >
              <Text className="text-white font-semibold text-xl ">Annuler</Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              className="px-4 py-2 rounded-lg bg-[#FFB84D]"
            >
              <Text className="text-[#32465a] font-semibold text-xl">Confirmer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
