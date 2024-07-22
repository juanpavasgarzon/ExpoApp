import { ScrollView, type ScrollViewProps, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedScrollViewProps = ScrollViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedScrollView({ style, lightColor, darkColor, ...rest }: ThemedScrollViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <ScrollView style={[{ backgroundColor }, style]} {...rest} />;
}
