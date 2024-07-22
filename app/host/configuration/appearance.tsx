import { ParallaxScrollView } from '@/components/ParallaxScrollView';
import { ThemedCheckbox } from '@/components/ThemedCheckbox';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors, ColorSchema } from '@/constants/Colors';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';

interface ColorPresentationProps {
    title: string;
    colors: ColorSchema
}

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#808080',
        marginRight: 5,
        marginVertical: 10,
    },
    presentation: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    colorInfo: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center"
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
});


function ColorPresentation({ title, colors }: ColorPresentationProps) {
    return (
        <Fragment>
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedView style={styles.presentation}>
                <ThemedView style={styles.colorInfo}>
                    <ThemedView
                        lightColor={colors.background}
                        darkColor={colors.background}
                        style={styles.square}
                    />
                    <ThemedText type="defaultSemiBold">
                        Color de fondo.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.colorInfo}>
                    <ThemedView
                        lightColor={colors.contrast}
                        darkColor={colors.contrast}
                        style={styles.square}
                    />
                    <ThemedText type="defaultSemiBold">
                        Color de constraste.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.colorInfo}>
                    <ThemedView
                        lightColor={colors.text}
                        darkColor={colors.text}
                        style={styles.square}
                    />
                    <ThemedText type="defaultSemiBold">
                        Color del texto.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.colorInfo}>
                    <ThemedView
                        lightColor={colors.tint}
                        darkColor={colors.tint}
                        style={styles.square}
                    />
                    <ThemedText type="defaultSemiBold">
                        Color de tinta.
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </Fragment>
    );
}

export default function AppearanceScreen() {
    const theme = useTheme();

    return (
        <ParallaxScrollView headerImage={<Ionicons size={310} name="color-palette-outline" style={styles.headerImage} />}>
            <ThemedText type="title" style={{ marginVertical: 10 }}>Cambiar tema</ThemedText>
            <ThemedCheckbox
                placeholder="Modo claro"
                value={theme.themeMode == "light"}
                onValueChange={() => theme.changeMode("light")}
            />
            <ThemedCheckbox
                placeholder="Modo oscuro"
                value={theme.themeMode == "dark"}
                onValueChange={() => theme.changeMode("dark")}
            />
            <ThemedCheckbox
                placeholder="Sistema"
                value={theme.themeMode == "system"}
                onValueChange={() => theme.changeMode("system")}
            />
            <ColorPresentation title='Informacion tema claro' colors={Colors.light} />
            <ColorPresentation title='Informacion tema oscuro' colors={Colors.dark} />
        </ParallaxScrollView>
    );
}