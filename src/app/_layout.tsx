import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0A0E21' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'BMI CALCULATOR' }} />
      <Stack.Screen name="results" options={{ title: 'KẾT QUẢ BMI' }} />
    </Stack>
  );
}