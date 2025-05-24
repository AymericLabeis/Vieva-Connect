import React from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import MenuScreen from './screens/MenuHome';
import Contact from './screens/Contact';

import './global.css';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#32465a' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold',
          fontSize: 22, 
          marginLeft: 15,  
         },
        headerLeft: ({ tintColor }) => (
          <Pressable
            onPress={() => navigation.getParent()?.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={30} color={tintColor || '#fff'} />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="MenuHome"
        component={MenuScreen}
        options={{ title: 'Accueil' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          title: 'Contact',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg">Chargement des polices...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#32465a',
          drawerLabelStyle: { fontWeight: 'bold' },
        }}
      >
        {/* Plusieurs liens dans le menu Drawer */}
        <Drawer.Screen
          name="MenuHome"
          component={StackScreens}
          options={{ headerShown: false, title: 'Accueil' }}
        />
        <Drawer.Screen
          name="Profil"
          component={Contact}
          options={{ title: 'Profil' }}
        />
        <Drawer.Screen
          name="Parametre"
          component={LoginScreen}
          options={{ title: 'Paramètre' }}
        />
        <Drawer.Screen
          name="Support technique"
          component={SignUpScreen}
          options={{ title: "support technique" }}
        />
        <Drawer.Screen
          name="Deconnexion"
          component={SignUpScreen}
          options={{ title: "Déconnexion" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

