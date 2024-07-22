import { TabBarIcon } from "@/components/TabBarIcon";
import { Tabs } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

export default function GuestLayout() {
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
                    title: 'Acceder',
                    tabBarIcon: TabBarIcon('open', 'open-outline')
                }}
            />
            <Tabs.Screen
                name="register"
                options={{
                    title: 'Registrarse',
                    tabBarIcon: TabBarIcon('person-add', 'person-add-outline')
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Acerca de nosotros',
                    tabBarIcon: TabBarIcon('information', 'information-outline')
                }}
            />
        </Tabs>
    );
}