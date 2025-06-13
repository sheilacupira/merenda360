import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { BotaoCard } from "../assets/components/BotaoCard";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation()

export function ModoCozinha(){
    return(
      <SafeAreaView style = {styles.container}>
        <BotaoCard
  titulo="VER CARDÁPIO"
  iconName="restaurant-outline"
  onPress={() => navigation.navigate('Cardapio')}
/>

<BotaoCard
  titulo="VER ESTOQUE"
  iconName="cube-outline"
  onPress={() => navigation.navigate('Estoque')}
/>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
 container:{
    backgroundColor:'#264653',

 }
})