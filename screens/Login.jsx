import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-[#b5c2c9] px-4">
      <View className="w-full max-w-xl bg-primary p-6 rounded-xl border-2 border-[#FFD369] shadow-xl">

        {/* Email */}
        <Text className="text-white text-lg mb-1">Adresse e-mail</Text>
        <TextInput
          className="bg-white rounded-md p-3 mb-4 text-gray-800"
          placeholder="Entrez votre e-mail"
          keyboardType="email-address"
        />

        {/* Mot de passe */}
        <Text className="text-white text-lg mb-1">Mot de passe</Text>
        <TextInput
          className="bg-white rounded-md p-3 mb-4 text-gray-800"
          placeholder="Entrez votre mot de passe"
          secureTextEntry
        />

        {/* Lien mot de passe oublié */}
        <View className="mb-3 items-center">
          <TouchableOpacity>
            <Text className="text-[#FFD369] text-lg font-medium">Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>

        {/* Bouton Connexion */}
        <TouchableOpacity className="bg-[#FFD369] py-3 rounded-md mb-3">
          <Text 
          onPress={() => navigation.navigate('MenuHome')}
          className="text-center text-[#37445a] text-lg font-bold">
            Connexion
            </Text>
        </TouchableOpacity>

        {/* Bouton Google */}
        <TouchableOpacity className="flex-row items-center justify-center bg-[#b5c2c9] border border-gray-700 py-3 rounded-md mb-3">
          <Image
            source={{ uri: 'https://www.svgrepo.com/show/475656/google-color.svg' }}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
          />
          <Text className="text-gray-800 text-lg font-medium">Continuer avec Google</Text>
        </TouchableOpacity>

        {/* Lien vers inscription */}
        <View className="items-center mt-2">
          <Text className="text-white text-lg">
            Pas encore de compte ?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              className="text-[#FFD369]  font-medium"
            >
              S'inscrire
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
