import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { RoundedButton } from "../RoundedButton";
import { SafeHeader } from "../SafeHeader";
import { styles } from "./styles";

export function MinimalHeader() {
    return (
        <SafeHeader>
            <View style={styles.header}>
                <RoundedButton backgroundColor="#00000005">
                    <Feather name="chevron-left" size={20} color="#96f" />
                </RoundedButton>
                <Text style={styles.title}>Voltar</Text>
            </View>
        </SafeHeader>
    );
}
