import React, { useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VideoCamera, Television, Lifebuoy } from 'phosphor-react-native';
import HelpModal from '../components/HelpModal';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const isLargeScreen = windowWidth >= 1200;
const numColumns = isLargeScreen ? 3 : 2;

// Espacement horizontal et calculs responsives
const horizontalSpacing = 16;
const totalSpacing = horizontalSpacing * (numColumns + 1);
const rawCardWidth = (windowWidth - totalSpacing) / numColumns;
const cardWidth = Math.min(rawCardWidth, 500);

const iconSize = Math.max(50, Math.min(90, windowWidth * 0.075));
const fontSize = Math.max(18, Math.min(30, windowWidth * 0.025));

export default function MenuHome({ navigation }) {
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);

  const Card = ({ onPress, bg, Icon, label }) => (
    <Pressable
      onPress={onPress}
      style={{
        width: cardWidth,
        marginHorizontal: horizontalSpacing / 2,
      }}
      className="bg-white p-3 rounded-2xl shadow-md border border-gray-200 items-center mb-4"
    >
      <View className="flex-1 items-center justify-center">
        <View className={`${bg} p-4 rounded-full mb-3`}>
          {typeof Icon === 'function' ? (
            <Icon size={iconSize} color="#fff" weight="fill" />
          ) : (
            <Ionicons name={Icon} size={iconSize} color="#fff" />
          )}
        </View>
        <Text style={{ fontSize }} className="font-semibold text-gray-800 text-center">
          {label}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View
      className="bg-gray-100 px-2"
      style={{
        flex: 1,
        justifyContent: isLargeScreen ? 'center' : 'flex-start',
        paddingTop: isLargeScreen ? 0 : 40,
        minHeight: windowHeight,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-gradient-to-tr from-blue-400 via-blue-600 to-indigo-700"
          Icon="person-circle"
          label="Contact"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-gradient-to-tr from-green-400 via-green-600 to-emerald-700"
          Icon="chatbubble-ellipses"
          label="Message"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600"
          Icon="calendar"
          label="Agenda"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800"
          Icon={VideoCamera}
          label="Appel vidéo"
        />
        <Card
          onPress={() => console.log('TV Broadcast')}
          bg="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600"
          Icon={Television}
          label="TV Broadcast"
        />
        <Card
          onPress={() => setIsHelpModalVisible(true)}
          bg="bg-gradient-to-tr from-red-400 via-red-600 to-red-700"
          Icon={Lifebuoy}
          label="Aide"
        />
      </View>

      <HelpModal
        visible={isHelpModalVisible}
        onClose={() => setIsHelpModalVisible(false)}
        title="Besoin d'aide ?"
        message="Voulez-vous vraiment demander de l'aide ?"
      />
    </View>
  );
}
