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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#32465a' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.getParent()?.toggleDrawer()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="menu" size={28} color="#fff" />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="MenuHome" component={MenuScreen} options={{ title: 'Menu Home' }} />
      <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contact' }} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text>Chargement des polices...</Text>
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
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Accueil' }}
        />
        <Drawer.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ title: 'Connexion / Inscription' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
