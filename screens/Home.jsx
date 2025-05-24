import React from 'react';
import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { width: windowWidth } = Dimensions.get('window');
  const buttonWidth = Math.min(windowWidth * 0.8, 500);
  const logoHeight = Math.min(windowWidth * 0.6, 400); // ajusté pour une meilleure proportion

  return (
    <View className="flex-1 bg-[#f0ffff] px-6 items-center justify-center">
      {/* Logo */}
      <View className="w-full items-center">
        <Image
          source={require('../assets/Vieva_Connect_logo.png')}
          resizeMode="contain"
          style={{ height: logoHeight, width: '80%' }}
        />
      </View>

      {/* Boutons */}
      <View style={{ width: buttonWidth }}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          className="bg-primary rounded-xl py-3"
        >
          <Text className="text-white text-center font-inter text-lg">Connexion</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          className="bg-primary rounded-xl py-3 mt-4"
        >
          <Text className="text-white text-center font-inter text-lg">Inscription</Text>
        </Pressable>
      </View>
    </View>
  );
}
