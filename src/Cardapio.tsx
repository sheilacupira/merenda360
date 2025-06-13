import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Cardapio() {
  // Example navigation usage
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Aqui vai o Cardapio</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({

})