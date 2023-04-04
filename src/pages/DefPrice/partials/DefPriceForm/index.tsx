import { Text, View } from "react-native";
import { styles } from "./styles";
import { FakeCurrencyInput } from "react-native-currency-input";
import { useState } from "react";

export function DefPriceForm() {
    const [price,setPrice] = useState(0.00);

    const changePrice = (p:number | null) => {
        if(p == null) setPrice(0.00);
        setPrice(Number(p));
    }

    return (
        <View style={styles.form}>
            <Text style={styles.question}>Qual valor você quer receber?</Text>
            <FakeCurrencyInput
                value={price}
                onChangeValue={changePrice}
                delimiter="."
                separator=","
                precision={2}
                style={styles.input}
            />
        </View>
    );
}