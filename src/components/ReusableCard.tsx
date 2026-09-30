import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ReusableCardProps {
  color: string;
  cardChild?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function ReusableCard({ color, cardChild, onPress, style }: ReusableCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      style={[styles.card, { backgroundColor: color }, style]}
      onPress={onPress}
      disabled={!onPress}
    >
      {cardChild}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});