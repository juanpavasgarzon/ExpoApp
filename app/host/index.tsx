import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/hooks/useSession';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function HomeScreen() {
  const { signOut } = useSession();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Welcome to the Home Screen.</ThemedText>
      <ThemedButton title="Root" onPress={() => router.replace("/")} style={{ width: "90%", margin: 5 }} />
      <ThemedButton title="Cerrar sesión" onPress={signOut} style={{ width: "90%", margin: 5 }} />
    </ThemedView>
  );
}