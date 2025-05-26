import React from 'react';
import { Modal, View, Text, Pressable, Dimensions } from 'react-native';
import { Television } from 'phosphor-react-native';

export default function CastToTVModal({ visible, onClose, onSelectDevice }) {
  const devices = [
    { id: 1, name: 'Salon TV' },
    { id: 2, name: 'Chambre TV' },
  ];

  const windowWidth = Dimensions.get('window').width;

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View
          className="bg-primary rounded-xl p-6"
          style={{ width: windowWidth * 0.9, maxWidth: 700 }}
        >
          {/* Icône + Titre alignés horizontalement */}
          <View className="flex-row items-center justify-center mb-8">
            <Television size={40} color="#ffffff" weight="bold"  />
            <Text className="text-3xl text-white font-bold text-center mx-3">
              Caster vers TV
            </Text>
          </View>

          <Text className="text-xl text-[#b5c2c9] font-bold mb-4 text-start">
            Sélectionnez un appareil :
          </Text>

          {devices.map((device) => (
            <Pressable
              key={device.id}
              onPress={() => onSelectDevice(device)}
              className="flex-row items-center justify-between p-3 mb-3 bg-white/10 rounded-xl border border-white/20"
            >
              <Text className="text-white text-xl">{device.name}</Text>
            </Pressable>
          ))}

          <Pressable onPress={onClose} className="bg-red-600 mt-4 p-3 rounded-md">
            <Text className="text-white text-center font-semibold text-2xl">
              Annuler
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
