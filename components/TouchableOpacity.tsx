import { type TouchableOpacityProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedTouchableOpacity({ style, disabled, lightColor, darkColor, onPress, ...rest }: ThemedTouchableOpacityProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <TouchableOpacity onPress={onPress} style={[{ backgroundColor }, style, disabled && { opacity: 0.4 }]} disabled={disabled} {...rest} />
    );
}