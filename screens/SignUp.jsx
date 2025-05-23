import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-[#eaeff4] px-4" contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
      <View className="bg-primary w-full max-w-xl mx-auto p-6 rounded-xl border-2 border-[#FFD369] shadow-xl">

        {/* Nom + Prénom */}
        <View className="flex-row gap-4 mb-4">
          <View className="flex-1">
            <Text className="text-white text-lg mb-1">Nom</Text>
            <TextInput
              className="bg-white text-gray-800 p-3 rounded-md border border-gray-300"
              placeholder="Votre nom"
            />
          </View>
          <View className="flex-1">
            <Text className="text-white text-lg mb-1">Prénom</Text>
            <TextInput
              className="bg-white text-gray-800 p-3 rounded-md border border-gray-300"
              placeholder="Votre prénom"
            />
          </View>
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-white text-lg mb-1">Adresse e-mail</Text>
          <TextInput
            className="bg-white text-gray-800 p-3 rounded-md border border-gray-300"
            placeholder="Votre e-mail"
            keyboardType="email-address"
          />
        </View>

        {/* Mot de passe */}
        <View className="mb-4">
          <Text className="text-white text-lg mb-1">Mot de passe</Text>
          <TextInput
            className="bg-white text-gray-800 p-3 rounded-md border border-gray-300"
            placeholder="Créez un mot de passe"
            secureTextEntry
          />
        </View>

        {/* Confirmation mot de passe */}
        <View className="mb-4">
          <Text className="text-white text-lg mb-1">Confirmer le mot de passe</Text>
          <TextInput
            className="bg-white text-gray-800 p-3 rounded-md border border-gray-300"
            placeholder="Confirmez le mot de passe"
            secureTextEntry
          />
        </View>

        {/* Conditions d'utilisation */}
        <View className="mb-4 flex-row items-start">
          <TouchableOpacity className="w-5 h-5 bg-white border border-gray-300 rounded mr-2" />
          <Text className="text-white">
            J'accepte les{' '}
            <Text className="text-[#FFD369] text-lg font-medium">Conditions Générales d'Utilisation</Text>
          </Text>
        </View>

        {/* Bouton Créer un compte */}
        <TouchableOpacity className="bg-[#FFD369] py-3 rounded-md mb-3">
          <Text className="text-center text-[#37445a] text-lg font-bold">Créer un compte</Text>
        </TouchableOpacity>

        {/* Lien vers connexion */}
        <View className="items-center">
          <Text className="text-white text-lg">
            Déjà un compte ?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              className="text-[#FFD369] font-medium"
            >
              Se connecter
            </Text>
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}
