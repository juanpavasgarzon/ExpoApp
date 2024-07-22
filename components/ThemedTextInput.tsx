import { TextInput, type TextInputProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'RobotoRegular',
    },
});

export function ThemedTextInput({ style, editable = true, lightColor, darkColor, ...otherProps }: ThemedTextInputProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const textColor = useThemeColor({ light: undefined, dark: undefined }, 'text');

    return (
        <TextInput
            style={[{ color: textColor, backgroundColor }, styles.input, style, !editable && { opacity: 0.4 }]}
            editable={editable}
            placeholderTextColor={textColor}
            clearButtonMode="while-editing"
            {...otherProps}
        />
    );
}