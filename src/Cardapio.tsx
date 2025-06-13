import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export function Cardapio(){
    return(
     <SafeAreaView>
        <Text>Aque vai o Cardapio</Text>
     </SafeAreaView>
    )
}

const style = StyleSheet.create({

})