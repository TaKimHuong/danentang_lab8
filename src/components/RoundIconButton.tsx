import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RoundIconButtonProps {
  icon: string;
  onPress: () => void;
}

export default function RoundIconButton({ icon, onPress }: RoundIconButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}>
      <Text style={styles.iconText}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4C4F5E',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 28,
  },
});