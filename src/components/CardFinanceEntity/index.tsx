import Feather from "@expo/vector-icons/Feather";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface CardFinanceEntityProps {
    financeKey: string;
    description: string;
}

export function CardFinanceEntity(props: CardFinanceEntityProps) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <View style={styles.info}>
                <View style={styles.iconImage}>
                    <Feather name="key" size={25} color="#fff" />
                </View>
                <View>
                    <Text style={styles.key}>{ props.financeKey }</Text>
                    <Text style={styles.description}>{ props.description }</Text>
                </View>
            </View>
            <Feather name="chevron-right" size={22} style={styles.icon} />
        </TouchableOpacity>
    );
}