import React, { useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VideoCamera, Television } from 'phosphor-react-native';
import MenuDrawer from '../components/MenuDrawer';

const { width: windowWidth } = Dimensions.get('window');
const computedWidth = windowWidth * 0.42;
const cardWidth = Math.min(computedWidth, 300);
const horizontalSpacing = (windowWidth - 2 * cardWidth) / 3;

export default function MenuHome({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View className="flex-1 bg-gray-100 relative">
      {/* Header */}
      <View className="flex-row items-center px-5 py-3 bg-primary">
        <Pressable onPress={() => setIsMenuOpen(true)} className="mr-4">
          <Ionicons name="menu" size={50} color="#fff" />
        </Pressable>
        <Text className="text-white text-2xl font-bold ms-1">Accueil</Text>
      </View>

      {/* Cartes */}
      <View className="flex-row flex-wrap justify-center mt-10">
        {/* Contact */}
        <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={{
            width: cardWidth,
            marginLeft: horizontalSpacing,
            marginRight: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-blue-400 via-blue-600 to-indigo-700 p-4 rounded-full mb-2">
            <Ionicons name="person-circle" size={50} color="#fff" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">Contact</Text>
        </Pressable>

        {/* Message */}
        <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={{
            width: cardWidth,
            marginRight: horizontalSpacing,
            marginLeft: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-green-400 via-green-600 to-emerald-700 p-4 rounded-full mb-2">
            <Ionicons name="chatbubble-ellipses" size={50} color="#fff" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">Message</Text>
        </Pressable>

        {/* Agenda */}
        <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={{
            width: cardWidth,
            marginLeft: horizontalSpacing,
            marginRight: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 p-4 rounded-full mb-2">
            <Ionicons name="calendar" size={50} color="#fff" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">Agenda</Text>
        </Pressable>

        {/* Appel vidéo */}
        <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={{
            width: cardWidth,
            marginRight: horizontalSpacing,
            marginLeft: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800 p-4 rounded-full mb-2">
            <VideoCamera size={50} color="#fff" weight="fill" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">Appel vidéo</Text>
        </Pressable>

        {/* Cast TV */}
        <View
          style={{
            width: cardWidth,
            marginLeft: horizontalSpacing,
            marginRight: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 p-4 rounded-full mb-2">
            <Television size={50} color="#fff" weight="fill" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">TV Broadcast</Text>
        </View>

         {/* Cast TV */}
         <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={{
            width: cardWidth,
            marginRight: horizontalSpacing,
            marginLeft: horizontalSpacing / 2,
          }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 items-center mb-8"
        >
          <View className="bg-gradient-to-tr from-red-400 via-red-600 to-red-700 p-4 rounded-full mb-2">
            <Lifebuoy size={50} color="#fff" weight="fill" />
          </View>
          <Text className="font-semibold text-2xl text-gray-800">Aide</Text>
        </Pressable>
      </View>

      {/* Menu Drawer */}
      {isMenuOpen && <MenuDrawer onClose={() => setIsMenuOpen(false)} />}
    </View>
  );
}

