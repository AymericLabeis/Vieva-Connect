import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MenuDrawer({ onClose }) {
  return (
    <View
      className="absolute top-0 left-0 bottom-0 bg-[#32465a] z-50 p-6 shadow-lg"
      style={{ width: width * 0.75 }}
    >
      {/* Croix en haut à droite */}
      <TouchableOpacity
        onPress={onClose}
        className="absolute top-4 right-4"
      >
        <Ionicons name="close" size={28} color="white" />
      </TouchableOpacity>

      {/* Menu Items */}
      <View className="mt-12">
        <Text className="text-white text-xl mb-4">Accueil</Text>
        <Text className="text-white text-xl mb-4">Profil</Text>
        <Text className="text-white text-xl mb-4">Paramètres</Text>
        <Text className="text-white text-xl mb-4">Support technique</Text>
        <Text className="text-red-500 text-xl">Déconnexion</Text>
      </View>
    </View>
  );
}
