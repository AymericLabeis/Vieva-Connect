import React, { useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VideoCamera, Television, Lifebuoy } from 'phosphor-react-native';
import HelpModal from '../components/HelpModal';
import LoadingModal from '../components/LoadingModal';
import CastToTVModal from '../components/CastModal'; // 🔥 Assure-toi que le chemin est correct

const { width: windowWidth } = Dimensions.get('window');

const isLargeScreen = windowWidth >= 1200;
const cardWidthPercent = isLargeScreen ? '30%' : '43%';

const iconSize = 70;
const fontSize = 20;

export default function MenuHome({ navigation }) {
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [isLoadingModalVisible, setIsLoadingModalVisible] = useState(false);
  const [isCastModalVisible, setIsCastModalVisible] = useState(false);

  const handleDeviceSelection = (device) => {
    console.log('Diffusion vers :', device.name);
    setIsCastModalVisible(false);
    // Tu peux lancer la diffusion réelle ici
  };

  const handleHelpConfirm = () => {
    setIsHelpModalVisible(false);
    setIsLoadingModalVisible(true);
    setTimeout(() => {
      setIsLoadingModalVisible(false);
    }, 5000);
  };

  const Card = ({ onPress, bg, Icon, label }) => (
    <Pressable
      onPress={onPress}
      style={{
        width: cardWidthPercent,
        maxWidth: 500,
        padding: 16,
        margin: 10,
      }}
      className="bg-white rounded-2xl shadow-md border border-gray-200 justify-center items-center"
    >
      <View className={`${bg} p-3 rounded-full mb-3`}>
        {typeof Icon === 'function' ? (
          <Icon size={iconSize} color="#ffffff" weight="fill" />
        ) : (
          <Ionicons name={Icon} size={iconSize} color="#ffffff" />
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
          bg="bg-blue-600"
          Icon="person-circle"
          label="Contact"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-green-600"
          Icon="chatbubble-ellipses"
          label="Message"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-orange-600"
          Icon="calendar"
          label="Agenda"
        />
        <Card
          onPress={() => navigation.navigate('Contact')}
          bg="bg-purple-600"
          Icon={VideoCamera}
          label="Appel vidéo"
        />
        <Card
          onPress={() => setIsCastModalVisible(true)} // 👉 ouvre la modal
          bg="bg-yellow-600"
          Icon={Television}
          label="Caster TV"
        />
        <Card
          onPress={() => setIsHelpModalVisible(true)}
          bg="bg-red-600"
          Icon={Lifebuoy}
          label="Aide"
        />
      </View>

      <HelpModal
        visible={isHelpModalVisible}
        onClose={() => setIsHelpModalVisible(false)}
        onConfirm={handleHelpConfirm}
        title="Besoin d'aide ?"
        message="Voulez-vous vraiment demander de l'aide ?"
      />

      <LoadingModal visible={isLoadingModalVisible} />

      <CastToTVModal
        visible={isCastModalVisible}
        onClose={() => setIsCastModalVisible(false)}
        onSelectDevice={handleDeviceSelection}
      />
    </View>
  );
}
