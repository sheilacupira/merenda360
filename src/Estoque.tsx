import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Estoque() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Aqui vai aparecer o estoque</Text>
    </SafeAreaView>
  );
}