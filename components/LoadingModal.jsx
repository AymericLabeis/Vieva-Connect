import React from 'react';
import { Modal, View, Text, ActivityIndicator, Dimensions } from 'react-native';
import EmergencyContacts from '../components/ContactCard'; // remplace ceci par ton vrai composant

export default function SOSLookupModal({ visible }) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View
          className="bg-primary rounded-xl shadow-xl p-6 items-center"
          style={{
            width: windowWidth * 0.9,
            maxWidth: 700,
            borderRadius: 16,
          }}
        >
          <ActivityIndicator size={80} color="#FFB84D" />
          <Text className="mt-4 text-2xl font-semibold text-[#b5c2c9] text-center">
            Envoi de notifications en cours...
          </Text>

          <Text className="mt-2 text-xl text-secondary text-center">
            Une alerte a été envoyée à plusieurs de vos contacts. Restez calme, ils arrivent pour vous aider.
          </Text>

          {/* Composant de contacts affiché après le loader */}
          <View className="mt-6 w-full">
            <EmergencyContacts name="Bernard Doe" />
            <EmergencyContacts name="Pompier" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
