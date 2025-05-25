import React, { useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VideoCamera, Television, Lifebuoy } from 'phosphor-react-native';
import HelpModal from '../components/HelpModal';

const { width: windowWidth } = Dimensions.get('window');

const isLargeScreen = windowWidth >= 1200;
const cardWidthPercent = isLargeScreen ? '30%' : '43%';

const iconSize = 70; 
const fontSize = 20;

export default function MenuHome({ navigation }) {
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);

  const Card = ({ onPress, bg, Icon, label }) => (
    <Pressable
      onPress={onPress}
      style={{
        width: cardWidthPercent,
        maxWidth: 500,
        padding: 16,
        margin:10,
      }}
      className="bg-white rounded-2xl shadow-md border border-gray-200 justify-center items-center mb-4"
    >
      <View className={`${bg} p-3 rounded-full mb-3`}>
        {typeof Icon === 'function' ? (
          <Icon size={iconSize} color="#fff" weight="fill" />
        ) : (
          <Ionicons name={Icon} size={iconSize} color="#fff" />
        )}
      </View>
      <Text style={{ fontSize }} className="font-semibold text-gray-800 text-center">
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View
      className="bg-gray-100 px-2"
      style={{
        flex: 1,
        justifyContent: isLargeScreen ? 'center' : 'flex-start',
        paddingTop: isLargeScreen ? 0 : 40,
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
          label="Caster TV"
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
