import { type ButtonProps, type StyleProp, type ViewStyle, StyleSheet, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';

export type ThemedButtonProps = ButtonProps & {
    style?: StyleProp<ViewStyle>,
    lightColor?: string;
    darkColor?: string;
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
    },
});

export function ThemedButton({ style, disabled, lightColor, darkColor, title, onPress }: ThemedButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');
    const textColor = useThemeColor({ light: undefined, dark: undefined }, 'text');

    return (
        <TouchableOpacity onPress={onPress} style={[{ backgroundColor }, styles.button, style, disabled && { opacity: 0.4 }]} disabled={disabled}>
            <Text style={[{ color: textColor }, styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
}