import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/hooks/useSession';
import { useTheme } from '@/hooks/useTheme';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
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
  const theme = useTheme();

  return (
    <Fragment>
      <StatusBar style={theme.currentTheme == "light" ? "dark" : "light"} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Welcome to the Home Screen.</ThemedText>
        <ThemedButton title="Root" onPress={() => router.replace("/")} style={{ width: "90%", margin: 5 }} />
        <ThemedButton title="Cerrar sesión" onPress={signOut} style={{ width: "90%", margin: 5 }} />
      </ThemedView>
    </Fragment>
  );
}