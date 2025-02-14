import { TabBarIcon } from "@/components/TabBarIcon";
import { Tabs } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

export default function ProfileLayout() {
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
                name="password"
                options={{
                    title: 'Cambiar contraseña',
                    tabBarIcon: TabBarIcon("key", 'key-outline')
                }}
            />
            <Tabs.Screen
                name="delete"
                options={{
                    title: 'Eliminar cuenta',
                    tabBarIcon: TabBarIcon("trash", "trash-outline")
                }}
            />
            <Tabs.Screen
                name="close"
                options={{
                    title: 'Cerrar sesión',
                    tabBarIcon: TabBarIcon("log-out", "log-out-outline"),
                }}
            />
        </Tabs>
    )
}