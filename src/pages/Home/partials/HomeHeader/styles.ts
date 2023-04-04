import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    
        elevation: 20, // e
        
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
    },
    action: {
        flexDirection: "row",
        gap: 10,
    }
});