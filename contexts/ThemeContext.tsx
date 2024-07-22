import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { DarkTheme, DefaultTheme, type Theme, ThemeProvider as NativeThemeProvider } from '@react-navigation/native';
import { useColorScheme } from "react-native";
import { type ColorSchema, Colors } from "@/constants/Colors";

type ColorSchemeName = "light" | "dark";
type CustomTheme = ColorSchemeName | 'system'

interface ThemeContextType {
    themeMode: CustomTheme;
    currentTheme: ColorSchemeName,
    theme: Theme,
    colors: ColorSchema,
    changeMode: (mode: CustomTheme) => Promise<void>
}

export const ThemeContext = createContext<ThemeContextType>({
    themeMode: "system",
    currentTheme: "light",
    theme: DefaultTheme,
    colors: Colors["light"],
    changeMode: async () => { }
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [themeMode, setThemeMode] = useState<CustomTheme>('system');

    const asyncStorage = useAsyncStorage("@theme");
    const colorScheme = useColorScheme() ?? "light";

    useEffect(() => {
        const init = async () => {
            const themeStored = await asyncStorage.getItem();
            const mode = themeStored || 'system';
            setThemeMode(mode as CustomTheme);
        }

        init();
    }, [])

    const changeMode = async (mode: CustomTheme) => {
        await asyncStorage.setItem(mode?.toString() ?? "system");
        setThemeMode(mode);
    };

    const value = useMemo(() => {
        const currentTheme = themeMode === 'system' ? colorScheme : themeMode;
        return {
            themeMode,
            currentTheme,
            theme: currentTheme === 'dark' ? DarkTheme : DefaultTheme,
            colors: Colors[currentTheme],
            changeMode,
        };
    }, [themeMode, colorScheme]);

    return (
        <ThemeContext.Provider value={value}>
            <NativeThemeProvider value={value.theme}>
                {children}
            </NativeThemeProvider>
        </ThemeContext.Provider>
    )
}