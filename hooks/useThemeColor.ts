import { useColorScheme } from 'react-native';
import { Colors } from "@/constants/Colors";

type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

interface UseColorSchemeProps {
  light?: string;
  dark?: string
}

export function useThemeColor(
  props: UseColorSchemeProps,
  colorName: ColorName
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
