import { ScrollView, TouchableOpacity, View } from "react-native";
import { HomeHeader } from "./partials/HomeHeader";
import { CardFinanceEntity } from "../../components/CardFinanceEntity";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.page}>
            <HomeHeader />
            <ScrollView style={styles.scrollFinanceEntity}>
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />

                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />
                <CardFinanceEntity
                    financeKey="teste@gmail.com"
                    description="Chave do meu banco do..."
                />

            </ScrollView>
        </View>
    );
}