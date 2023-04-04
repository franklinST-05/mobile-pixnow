import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function RoundedButton(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            style={styles.button}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        width: 55,
        height: 55,
        borderRadius: 55,
        backgroundColor: "#fff2",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});