import { type ColorSchema } from "@/constants/Colors";
import { useTheme } from "./useTheme";

type ColorName = keyof ColorSchema;

interface UseColorSchemeProps {
  light?: string;
  dark?: string
}

export function useThemeColor(
  props: UseColorSchemeProps,
  colorName: ColorName
) {
  const theme = useTheme();
  const colorFromProps = props[theme.currentTheme!];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme.colors[colorName];
  }
}
