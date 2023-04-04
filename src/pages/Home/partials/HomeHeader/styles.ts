import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
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