import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { BotaoCard } from "../assets/components/BotaoCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./routes/types";

type ModoCozinhaScreenProps =
  NativeStackNavigationProp<RootStackParamList, "ModoCozinha">;

export function ModoCozinha() {
  const navigation = useNavigation<ModoCozinhaScreenProps>();

  return (
    <SafeAreaView style={styles.container}>
      <BotaoCard
        titulo="VER CARDÁPIO"
        iconName="restaurant-outline"
        onPress={() => navigation.navigate('AppDrawer', { screen: 'Cardapio' })}
      />

      <BotaoCard
        titulo="VER ESTOQUE"
        iconName="cube-outline"
        onPress={() => navigation.navigate('AppDrawer', { screen: 'Estoque' })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#264653',
  },
});
