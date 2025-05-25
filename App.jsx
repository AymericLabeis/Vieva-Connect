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
import Profil from './screens/Profil';

import './global.css';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Options avec menu burger
const stackScreenOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#32465a',
    
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerLeft: ({ tintColor }) => (
    <Pressable onPress={() => navigation.getParent()?.toggleDrawer()} style={{ margin: 15 }}>
      <Ionicons name="menu" size={25} color={tintColor || '#fff'} />
    </Pressable>
  ),
});

// Options avec bouton retour ←
const withBackHeader = (title) => ({
  title,
  swipeEnabled: false,
  headerStyle: {
    backgroundColor: '#fff',
    
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#32465a',
  },
  headerLeft: ({ navigation }) => (
    <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
      <Ionicons name="arrow-back" size={30} color="#32465a" />
    </Pressable>
  ),
});

// Stack principal avec le menu burger
function StackScreens() {
  return (
    <Stack.Navigator initialRouteName="MenuHome" screenOptions={stackScreenOptions}>
      <Stack.Screen name="MenuHome" component={MenuScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          title: 'Contact',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
              <Ionicons name="arrow-back" size={25} color="#fff" />
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
          drawerLabelStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            marginVertical: 2,
            marginLeft: 15,
          },
          drawerItemStyle: {
            marginVertical: 6,
          },
        }}
      >
        <Drawer.Screen name="MenuHome" component={StackScreens} options={{ headerShown: false, title: 'Accueil' }} />
        <Drawer.Screen name="Profil" component={Profil} options={({ navigation }) => ({
          ...withBackHeader('Profil'),
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
              <Ionicons name="arrow-back" size={25} color="#32465a" />
            </Pressable>
          ),
        })} />
        <Drawer.Screen name="Parametre" component={LoginScreen} options={({ navigation }) => ({
          ...withBackHeader('Paramètre'),
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
              <Ionicons name="arrow-back" size={25} color="#32465a" />
            </Pressable>
          ),
        })} />
        <Drawer.Screen name="Support technique" component={SignUpScreen} options={({ navigation }) => ({
          ...withBackHeader('Support technique'),
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
              <Ionicons name="arrow-back" size={25} color="#32465a" />
            </Pressable>
          ),
        })} />
        <Drawer.Screen name="Deconnexion" component={SignUpScreen} options={({ navigation }) => ({
          ...withBackHeader('Déconnexion'),
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
              <Ionicons name="arrow-back" size={25} color="#32465a" />
            </Pressable>
          ),
        })} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
