import { TabBarIcon } from "@/components/TabBarIcon";
import { Tabs } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

export default function ConfigurationLayout() {
    const theme = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Información',
                    tabBarIcon: TabBarIcon('information', 'information-outline')
                }}
            />
            <Tabs.Screen
                name="appearance"
                options={{
                    title: 'Apariencia',
                    tabBarIcon: TabBarIcon("color-palette", 'color-palette-outline')
                }}
            />
        </Tabs>
    )
}