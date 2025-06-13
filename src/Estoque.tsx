import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation;

export function Estoque(){
    return (
        <SafeAreaView>
            <Text>Aqui vai aparecer o estoque</Text>
        </SafeAreaView>
    )
}