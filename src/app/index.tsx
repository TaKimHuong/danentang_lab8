import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import ReusableCard from '../components/ReusableCard';
import RoundIconButton from '../components/RoundIconButton';
import CalculatorBrain from '../services/CalculatorBrain';

const ACTIVE_CARD_COLOR = '#1D1E33';
const INACTIVE_CARD_COLOR = '#111328';
const BOTTOM_CONTAINER_COLOR = '#EB1555';

export default function BMICalculatorScreen() {
  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(60);
  const [age, setAge] = useState<number>(20);

  const handleCalculate = () => {
    const calc = new CalculatorBrain(height, weight);
    const bmiResult = calc.calculateBMI();
    const resultText = calc.getResult();
    const interpretation = calc.getInterpretation();

    router.push({
      pathname: '/results',
      params: { bmiResult, resultText, interpretation },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Giới tính: MALE / FEMALE */}
      <View style={styles.row}>
        <ReusableCard
          color={selectedGender === 'male' ? ACTIVE_CARD_COLOR : INACTIVE_CARD_COLOR}
          style={styles.flexItem}
          onPress={() => setSelectedGender('male')}
          cardChild={
            <View style={styles.iconContainer}>
              <Text style={styles.emojiIcon}>♂</Text>
              <Text style={styles.label}>MALE</Text>
            </View>
          }
        />
        <ReusableCard
          color={selectedGender === 'female' ? ACTIVE_CARD_COLOR : INACTIVE_CARD_COLOR}
          style={styles.flexItem}
          onPress={() => setSelectedGender('female')}
          cardChild={
            <View style={styles.iconContainer}>
              <Text style={styles.emojiIcon}>♀</Text>
              <Text style={styles.label}>FEMALE</Text>
            </View>
          }
        />
      </View>

      {/* Chiều cao với thanh kéo Slider */}
      <ReusableCard
        color={ACTIVE_CARD_COLOR}
        style={styles.heightCard}
        cardChild={
          <View style={styles.centerAlign}>
            <Text style={styles.label}>CHIỀU CAO</Text>
            <View style={styles.unitRow}>
              <Text style={styles.numberText}>{height}</Text>
              <Text style={styles.unitText}>cm</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={100}
              maximumValue={220}
              step={1}
              value={height}
              minimumTrackTintColor="#EB1555"
              maximumTrackTintColor="#8D8E98"
              thumbTintColor="#EB1555"
              onValueChange={(val) => setHeight(val)}
            />
          </View>
        }
      />

      {/* Cân nặng & Tuổi */}
      <View style={styles.row}>
        <ReusableCard
          color={ACTIVE_CARD_COLOR}
          style={styles.flexItem}
          cardChild={
            <View style={styles.centerAlign}>
              <Text style={styles.label}>CÂN NẶNG</Text>
              <Text style={styles.numberText}>{weight}</Text>
              <View style={styles.buttonRow}>
                <RoundIconButton icon="-" onPress={() => setWeight((w) => Math.max(1, w - 1))} />
                <RoundIconButton icon="+" onPress={() => setWeight((w) => w + 1)} />
              </View>
            </View>
          }
        />
        <ReusableCard
          color={ACTIVE_CARD_COLOR}
          style={styles.flexItem}
          cardChild={
            <View style={styles.centerAlign}>
              <Text style={styles.label}>TUỔI</Text>
              <Text style={styles.numberText}>{age}</Text>
              <View style={styles.buttonRow}>
                <RoundIconButton icon="-" onPress={() => setAge((a) => Math.max(1, a - 1))} />
                <RoundIconButton icon="+" onPress={() => setAge((a) => a + 1)} />
              </View>
            </View>
          }
        />
      </View>

      {/* Nút bấm Tính kết quả */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.bottomButton}
        onPress={handleCalculate}
      >
        <Text style={styles.bottomButtonText}>TÍNH TOÁN BMI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E21',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  flexItem: {
    flex: 1,
    height: 140,
  },
  heightCard: {
    marginHorizontal: 14,
    paddingVertical: 16,
  },
  centerAlign: {
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  emojiIcon: {
    fontSize: 48,
    color: '#8D8E98',
  },
  label: {
    fontSize: 16,
    color: '#8D8E98',
    fontWeight: '600',
    marginTop: 6,
  },
  unitRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  numberText: {
    fontSize: 44,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  unitText: {
    fontSize: 16,
    color: '#8D8E98',
    marginLeft: 4,
  },
  slider: {
    width: '90%',
    height: 40,
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  bottomButton: {
    backgroundColor: BOTTOM_CONTAINER_COLOR,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});