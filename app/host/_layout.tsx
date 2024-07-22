import { TabBarIcon } from "@/components/TabBarIcon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { Colors } from "@/constants/Colors";
import { ThemedTouchableOpacity } from "@/components/TouchableOpacity";
import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ParamListBase } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { HeaderAction } from "@/components/HeaderAction";


export default function HostLayout() {
    const colorScheme = useColorScheme();

    const tintColor = Colors[colorScheme ?? 'light'].tint;
    const contrastColor = Colors[colorScheme ?? 'light'].contrast;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ navigation }) => ({
                    drawerType: 'front',
                    drawerActiveTintColor: tintColor,
                    headerLeft: HeaderAction({ navigation, contrastColor, tintColor, action: "openDrawer" }),
                    headerRightContainerStyle: { paddingHorizontal: 10, marginBottom: 5 },
                    headerLeftContainerStyle: { paddingHorizontal: 10, marginBottom: 5 },
                    headerRight: HeaderAction({ navigation, contrastColor, tintColor, action: "goBack" }),
                })}>
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
            </Drawer>
        </GestureHandlerRootView>
    );
}