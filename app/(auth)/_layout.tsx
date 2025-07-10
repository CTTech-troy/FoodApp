import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { Text } from 'react-native';
import React from 'react';

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>_layout</Text>
      <Slot />
    </SafeAreaView>
  );
}