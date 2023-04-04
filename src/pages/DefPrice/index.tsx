import { Text, View } from "react-native";
import { MinimalHeader } from "../../components/MinimalHeader";
import { DefPriceForm } from "./partials/DefPriceForm";
import { FloatingActionButton } from "../../components/FloatingActionButton";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";

export function DefPrice() {
    return (
        <View style={styles.page}>
            <MinimalHeader />
            <DefPriceForm />
            <FloatingActionButton>
                <Text style={{ color: "#fff", fontSize: 15, }}>Continuar</Text>
                <Feather name="chevron-right" size={20} color="#fff"/>
            </FloatingActionButton>
        </View>
    );
}

