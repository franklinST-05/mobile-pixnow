import { Text, View } from "react-native";
import { SafeHeader } from "../../../../components/SafeHeader";
import { styles } from "./styles";
import { RoundedButton } from "../../../../components/RoundedButton";
import Feather from "@expo/vector-icons/Feather";

export function HomeHeader() {
    return (
        <SafeHeader
            backgroundColor="#B56EED"
            status={{
                backgroundColor: "#B56EED",
                style: "light",
            }}
        >
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.title}>PIXNOW</Text>
                    <Text style={styles.description}>Olá, Franklin</Text>
                </View>
                <RoundedButton>
                    <Feather name="settings" size={22} color="#fff"/>
                </RoundedButton>
            </View>

        </SafeHeader>
    );
}
