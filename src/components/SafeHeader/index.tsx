import React from "react";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./styles";

interface SafeHeaderProps {
    status?: StatusBarProps;
    backgroundColor?: string;
    children?: React.ReactNode;
}

export function SafeHeader(props: SafeHeaderProps) {
    return (
        <View style={{...styles.content, backgroundColor: props.backgroundColor}}>
            <StatusBar {...props.status}/>
            { props.children }
        </View>
    );
}