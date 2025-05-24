import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from '../api/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import de l'icône (FontAwesome par exemple)
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      setError('');
      const response = await axios.post('/api/login', {
        email: email,
        mdp: password,

      });

      const token = response.data.token;
      if (!token) {
        setError("Aucun token reçu, veuillez réessayer.");
        return;
      }

      await AsyncStorage.setItem('authToken', token);
      navigation.navigate('MenuHome');
    } catch (err) {
      console.error('Erreur de connexion:', err.response?.data || err.message || err);
      setError("Email ou mot de passe incorrect.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#f0ffff] px-4">
      <View className="w-full max-w-xl bg-primary p-6 rounded-xl border-2 border-[#FFD369] shadow-xl my-10">

        {/* Email */}
        <Text className="text-white text-xl mb-1">Adresse e-mail</Text>
        <TextInput
          className="bg-white rounded-md p-2 px-3 mb-4 text-gray-800 text-base"
          placeholder="Entrez votre e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        {/* Mot de passe avec icône œil */}
        <Text className="text-white text-xl  mb-1">Mot de passe</Text>
        <View className="relative w-full mb-4">
          <TextInput
            className="bg-white rounded-md p-2 px-3 text-gray-800 text-base pr-10" // padding right pour l'icone
            placeholder="Entrez votre mot de passe"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            style={{ paddingRight: 40 }} // espace pour l'icône
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
            style={{ position: 'absolute', right: 15, top: 8 }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={25}
              color="#37445a"
            />
          </TouchableOpacity>
        </View>

        {/* Erreur */}
        {error ? (
          <Text className="text-red-600 text-center text-lg mb-2">{error}</Text>
        ) : null}

        {/* Lien mot de passe oublié */}
        <View className="mb-3 items-center">
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text className="text-[#FFD369] text-lg font-medium">Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>

        {/* Bouton Connexion */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-[#FFD369] p-2 rounded-md mb-3"
          disabled={!email.trim() || !password.trim()}
        >
          <Text className="text-center text-[#37445a] text-xl font-bold">Connexion</Text>
        </TouchableOpacity>

        {/* Bouton Google */}
        <TouchableOpacity className="flex-row items-center justify-center bg-[#b5c2c9] border border-gray-700 p-2 rounded-md mb-3">
          <Image
            source={{ uri: 'https://www.svgrepo.com/show/475656/google-color.svg' }}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
          />
          <Text className="text-gray-800 text-xl font-medium">Continuer avec Google</Text>
        </TouchableOpacity>

        {/* Lien vers inscription */}
        <View className="items-center mt-2">
          <Text className="text-white text-lg">
            Pas encore de compte ?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              className="text-[#FFD369] font-medium"
            >
              S'inscrire
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
