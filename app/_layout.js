import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../src/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerTintColor: '#2563eb' }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="questions/index" options={{ title: 'Questions' }} />
        <Stack.Screen name="questions/[id]" options={{ title: 'Question' }} />
        <Stack.Screen name="auth" options={{ title: 'Account', presentation: 'modal' }} />
      </Stack>
    </AuthProvider>
  );
}
