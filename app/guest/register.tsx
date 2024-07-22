import { ThemedButton } from "@/components/ThemedButton";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/hooks/useSession";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";

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
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const { signUp } = useSession();

    const renderHeaderImage = (
        <Ionicons size={310} name="person-add-outline" style={styles.headerImage} />
    );

    return (

        <ParallaxScrollView headerImage={renderHeaderImage}>
            <ThemedView style={styles.root}>
                <ThemedText type="title" style={[styles.title, styles.spacing]}>Regístrate</ThemedText>
                <ThemedTextInput
                    placeholder="Nombre completo"
                    value={name}
                    onChangeText={setName}
                    style={styles.spacing}
                />
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
                <ThemedTextInput
                    placeholder="Confirma contraseña"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry
                    style={styles.spacing}
                />
                <ThemedButton title="Aceptar" onPress={signUp} style={styles.spacing} />
            </ThemedView>
        </ParallaxScrollView>
    );
}