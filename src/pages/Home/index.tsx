import { ScrollView } from "react-native";
import { HomeHeader } from "./partials/HomeHeader";

export function Home() {
    return (
        <ScrollView>
            <HomeHeader/>
        </ScrollView>
    );
}