import { TabBarIcon } from "@/components/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function GuestLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
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