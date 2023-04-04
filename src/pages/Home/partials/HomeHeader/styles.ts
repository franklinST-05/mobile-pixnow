import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flex:1,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    info: {
        flexDirection: "column",
        gap: 0,
    },
    title: {
        fontSize: 20,
        fontWeight:"700",
        color: "#fff",
    },
    description: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff"
    }
});