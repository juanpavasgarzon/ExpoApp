import { ThemedButton } from "@/components/ThemedButton";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/hooks/useSession";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedCheckbox } from "@/components/ThemedCheckbox";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
    },
    spacing: {
        minWidth: '100%',
        marginBottom: 20,
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
});

export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hasRemember, setHasRemember] = useState<boolean>(false);

    const { signIn } = useSession();

    const goToRegister = () => {
        router.replace('guest/register');
    }

    const renderHeaderImage = (
        <Ionicons size={310} name="open-outline" style={styles.headerImage} />
    );

    return (
        <ParallaxScrollView headerImage={renderHeaderImage}>
            <ThemedView style={styles.root}>
                <ThemedText type="title" style={[styles.title, styles.spacing]}>Inicia sesión</ThemedText>
                <ThemedTextInput
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.spacing}
                />
                <ThemedTextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.spacing}
                />
                <ThemedCheckbox
                    value={hasRemember}
                    onValueChange={setHasRemember}
                    placeholder="Mantenme conectado"
                    rootStyle={styles.spacing}
                />
                <ThemedButton
                    title="Aceptar"
                    onPress={signIn}
                    style={styles.spacing}
                />
                <ThemedButton
                    title="Regístrate"
                    onPress={goToRegister}
                    style={styles.spacing}
                    lightColor="#CCCCCC"
                    darkColor="#333333"
                />
            </ThemedView>
        </ParallaxScrollView>
    );
}