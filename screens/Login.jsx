import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Exemple de validation basique
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    // Ici, appeler ton API ou logique de connexion
    Alert.alert('Succès', `Connexion avec ${email}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white px-6 justify-center"
    >
      <Text className="text-3xl font-bold mb-6 text-center">Connexion</Text>

      <View className="space-y-4">
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-3 text-base"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-md px-4 py-3 text-base"
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          onPress={handleLogin}
          className="bg-blue-600 rounded-xl py-3 mt-4"
        >
          <Text className="text-white text-center text-lg font-semibold">Se connecter ///</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
