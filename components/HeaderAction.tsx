import { DrawerScreenProps } from "@react-navigation/drawer";
import { ThemedTouchableOpacity } from "./TouchableOpacity";
import { ParamListBase } from "@react-navigation/native";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";
import { ComponentProps } from "react";

type IconName = ComponentProps<typeof Ionicons>['name'];

interface DrawerScreen {
    navigation: DrawerScreenProps<ParamListBase, keyof ParamListBase, string>["navigation"]
};

interface HeaderActionProps {
    iconName: IconName,
    onPress: (event: GestureResponderEvent) => void;
}

const style = StyleSheet.create({
    action: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        padding: 5
    }
});


export const HeaderAction = ({ iconName, onPress }: HeaderActionProps) => {
    const theme = useTheme();
    const tintColor = theme.colors.tint;
    const contrastColor = theme.colors.contrast;

    return (
        <ThemedTouchableOpacity
            lightColor={contrastColor}
            darkColor={contrastColor}
            style={style.action}
            onPress={onPress}
        >
            <Ionicons name={iconName} size={25} color={tintColor} />
        </ThemedTouchableOpacity>
    )
}