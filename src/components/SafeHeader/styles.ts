import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    content: {
        width: "100%",
        minHeight: 100,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
    }
});