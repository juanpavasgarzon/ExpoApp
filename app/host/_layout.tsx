import { TabBarIcon } from "@/components/TabBarIcon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import React from "react";
import { HeaderAction } from "@/components/HeaderAction";
import { useTheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        marginBottom: 5
    }
})

export default function HostLayout() {
    const theme = useTheme();
    const navigation = useNavigation();
    const router = useRouter();

    const handleOpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer)
    }

    const handleProfileNavigate = () => {
        router.navigate("/host/profile")
    }

    const renderHeaderLeft = () => (
        <HeaderAction onPress={handleOpenDrawer} iconName="menu" />
    )

    const renderHeaderRight = () => (
        <HeaderAction onPress={handleProfileNavigate} iconName="person" />
    )

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerType: 'front',
                    drawerActiveTintColor: theme.colors.tint,
                    headerRightContainerStyle: styles.headerContainer,
                    headerLeftContainerStyle: styles.headerContainer,
                    headerLeft: renderHeaderLeft,
                    headerRight: renderHeaderRight,
                }}>
                <Drawer.Screen
                    name="index"
                    options={{
                        title: 'Inicio',
                        drawerIcon: TabBarIcon("home", "home-outline")
                    }}
                />
                <Drawer.Screen
                    name="profile"
                    options={{
                        title: 'Mi perfil',
                        drawerIcon: TabBarIcon("person", "person-outline")
                    }}
                />
                <Drawer.Screen
                    name="configuration"
                    options={{
                        title: 'Configuración',
                        drawerIcon: TabBarIcon("settings", "settings-outline")
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}