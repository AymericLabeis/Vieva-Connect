
import React from 'react';
import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const buttonWidth = Math.min(windowWidth * 0.8, 500);
  const logoHeight = windowHeight * 0.3;

  return (
    <View 
      className="bg-[#f0ffff] items-center justify-center px-6 " 
      style={{ flex: 1 }}
    >
      {/* Logo */}
      <Image
        source={require('../assets/Vieva_Connect_logo.png')}
        resizeMode="contain"
        style={{ height: logoHeight, marginBottom: 32, width: '80%' }}
      />

      {/* Boutons */}
      <View className="space-y-4" style={{ width: buttonWidth }}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          className="bg-primaryBtn rounded-xl py-3"
          style={{ width: '100%' }}
        >
          <Text className="text-white text-center font-inter text-lg">Connexion</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          className="bg-primaryBtn rounded-xl py-3"
          style={{ width: '100%' }}
        >
          <Text className="text-white text-center font-inter text-lg">Inscription</Text>
        </Pressable>
      </View>
    </View>
  );
}




