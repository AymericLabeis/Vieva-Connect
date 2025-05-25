import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    console.log({ lastname, firstname, email, password });
  };

  return (
    <ScrollView className="flex-1 bg-[#eaeff4] px-4" contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
          <View className="bg-primary w-full max-w-xl mx-auto p-6 rounded-xl border-2 border-[#37445a] shadow-xl my-10">

        {/* Ligne image + inputs nom/prénom */}
        <View className="flex-row  mb-3">
          {/* Colonne image */}
          <View className="w-2/5 items-center  justify-center">
            <Image
              source={require('../assets/user-I.png')}
              style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#b5c2c9',marginRight:20 }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
               
                right: 20,
                bottom: 6,
                backgroundColor: '#b5c2c9',
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Icon name="pencil" size={15} color="white" />
            </TouchableOpacity>
          </View>

          {/* Colonne nom/prénom */}
          <View className="w-3/5">
            <View className="mb-4">
              <Text className="text-white mb-1 font-semibold">Nom</Text>
              <TextInput
                className="bg-white rounded-md p-2 px-3 text-gray-800"
                placeholder="Votre nom"
                value={lastname}
                onChangeText={setLastname}
              />
            </View>
            <View>
              <Text className="text-white mb-1 font-semibold">Prénom</Text>
              <TextInput
                className="bg-white rounded-md p-2 px-3 text-gray-800"
                placeholder="Votre prénom"
                value={firstname}
                onChangeText={setFirstname}
              />
            </View>
          </View>
        </View>

        {/* Autres champs */}
        <View className="mb-3">
          <Text className="text-white mb-1 font-semibold">Adresse e-mail</Text>
          <TextInput
            className="bg-white rounded-md p-2 px-3 text-gray-800"
            placeholder="Votre e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="mb-3">
          <Text className="text-white mb-1 font-semibold">Mot de passe</Text>
          <TextInput
            className="bg-white rounded-md p-2 px-3 text-gray-800"
            placeholder="Nouveau mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="mb-6">
          <Text className="text-white mb-1 font-semibold">Confirmer le mot de passe</Text>
          <TextInput
            className="bg-white rounded-md p-2 px-3 text-gray-800"
            placeholder="Confirmez le mot de passe"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-[#b5c2c9] p-2 rounded-md"
        >
          <Text className="text-center text-[#37445a] text-lg font-semibold">Modifier mon profil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
