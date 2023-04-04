import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export function RoundedButton(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            style={styles.button}
            {...props}
        />
    );
}