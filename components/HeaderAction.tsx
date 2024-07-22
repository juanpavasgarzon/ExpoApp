import { DrawerScreenProps } from "@react-navigation/drawer";
import { ThemedTouchableOpacity } from "./TouchableOpacity";
import { ParamListBase } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


interface DrawerScreen {
    navigation: DrawerScreenProps<ParamListBase, keyof ParamListBase, string>["navigation"]
};

interface HeaderActionParams extends DrawerScreen {
    action: "openDrawer" | "goBack",
    contrastColor: string
    tintColor: string
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


export const HeaderAction = ({ navigation, action, contrastColor, tintColor }: HeaderActionParams) => () => {
    return (
        <ThemedTouchableOpacity
            lightColor={contrastColor}
            darkColor={contrastColor}
            style={style.action}
            onPress={action == "openDrawer" ? navigation.openDrawer : navigation.goBack}
            disabled={action == "goBack" && !navigation.canGoBack()}
        >
            <Ionicons name={action == "openDrawer" ? "menu" : "arrow-back"} size={25} color={tintColor} />
        </ThemedTouchableOpacity>
    )
}