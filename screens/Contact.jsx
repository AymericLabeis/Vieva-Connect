import React from 'react';
import { ScrollView, Text } from 'react-native';
import ContactCard from '../components/ContactCard';

export default function MonProfil() {
  return (
    <ScrollView className="flex-1 bg-[#1C242B] px-4 py-6">
      <Text className="text-white text-2xl font-bold mb-4">Mes contacts</Text>

      <ContactCard name="Bernard Doe" />
      <ContactCard name="Barbara Crusson" />
    </ScrollView>
  );
}

