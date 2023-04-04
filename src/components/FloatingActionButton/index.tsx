import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function FloatingActionButton(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            { ...props }
        />
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 20,
        bottom: 20,
        minWidth: 120,
        height: 55,
        backgroundColor: "#96f",
        borderRadius: 55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 20,
    }
});