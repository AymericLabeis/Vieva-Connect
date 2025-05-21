import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuDrawer from '../components/MenuDrawer';

export default function MenuHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View className="flex-1 bg-gray-100 relative">
      {/* Header personnalisé */}
      <View className="flex-row items-center px-5 py-3 bg-primaryBtn">
       <Pressable onPress={() => setIsMenuOpen(true)} className="mr-4">
        <Ionicons name="menu" size={40} color="#fff" />
      </Pressable>
      <Text className="text-white text-2xl font-bold fs-1 ms-1">Accueil</Text>
     </View>


      {/* Contenu principal */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-base">Bienvenue sur MenuHome</Text>
      </View>

      {/* Menu en overlay */}
      {isMenuOpen && <MenuDrawer onClose={() => setIsMenuOpen(false)} />}
    </View>
  );
}
