import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Import de l'image locale
const userIcon = require('../assets/user-Icone.png');

export default function ContactCard({ name }) {
  return (
    <View
      className="flex-row items-center mb-3 rounded-xl border px-3 py-2"
      style={{
        backgroundColor: '#506875',
        borderColor: '#52727C59',
      }}
    >
      <Image
        source={userIcon}
        style={styles.image}
      />
      <Text className="text-xl font-medium text-[#DDE7E9] ml-3">
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#7dadbb',
  },
});
