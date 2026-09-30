import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ResultsScreen() {
  const router = useRouter();
  const { bmiResult, resultText, interpretation } = useLocalSearchParams<{
    bmiResult: string;
    resultText: string;
    interpretation: string;
  }>();

  const getResultColor = () => {
    if (resultText === 'BÌNH THƯỜNG') return '#24D876';
    if (resultText === 'THỪA CÂN') return '#EB1555';
    return '#E0A922';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Kết Quả Của Bạn</Text>

      <View style={styles.resultCard}>
        <Text style={[styles.resultCategory, { color: getResultColor() }]}>
          {resultText}
        </Text>
        <Text style={styles.bmiValue}>{bmiResult}</Text>
        <Text style={styles.bodyText}>{interpretation}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.bottomButton}
        onPress={() => router.back()}
      >
        <Text style={styles.bottomButtonText}>TÍNH LẠI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E21',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  resultCard: {
    flex: 1,
    backgroundColor: '#1D1E33',
    marginHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 24,
  },
  resultCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  bmiValue: {
    fontSize: 76,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bodyText: {
    fontSize: 18,
    color: '#F8F9FA',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 12,
  },
  bottomButton: {
    backgroundColor: '#EB1555',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});