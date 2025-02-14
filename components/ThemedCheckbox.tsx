import { type StyleProp, type ViewStyle, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Checkbox, type CheckboxProps } from 'expo-checkbox';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ThemedCheckboxProps = CheckboxProps & {
    rootStyle?: StyleProp<ViewStyle>
    placeholder?: string;
    lightColor?: string;
    darkColor?: string;
};

const styles = StyleSheet.create({
    check: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholder: {
        marginLeft: 10,
    }
});

export function ThemedCheckbox({ rootStyle, style, onValueChange, value, placeholder, lightColor, darkColor, ...rest }: ThemedCheckboxProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');

    return (
        <ThemedView style={[rootStyle, styles.check]}>
            <Checkbox color={backgroundColor} value={value} onValueChange={onValueChange} {...rest} />
            <ThemedText type="default" style={styles.placeholder}>{placeholder}</ThemedText>
        </ThemedView>
    );
}