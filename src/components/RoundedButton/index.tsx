import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface RoundedButtonProps extends TouchableOpacityProps{
    backgroundColor?: string;
}

export function RoundedButton(props: RoundedButtonProps) {

    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            style={{ ...styles.button, backgroundColor: props.backgroundColor }}
            {...props}
        />
    );
}