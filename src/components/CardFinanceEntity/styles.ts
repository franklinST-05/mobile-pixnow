import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: "100%",
        alignSelf: "center",
        height: 80,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 18,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    info: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        gap: 16,
    },
    iconImage: {
        width: (80 - (12 * 2)),
        height: (80 - (12 * 2)),
        backgroundColor: "#96f",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
    },
    key: {
        fontSize: 16,
        fontWeight: "600",
    },
    description: {
        color: "#888",
        fontSize: 13,
        fontWeight: "400",
    },

    icon: {
        color: "#666",
        padding: 10,
    }
});