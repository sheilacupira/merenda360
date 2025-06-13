import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface BotaoProps {
  titulo: string;
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
}

export function BotaoCard({ titulo, onPress, iconName }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name={iconName} size={32} color="#2D6A4F" style={styles.icone} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F0',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
    elevation: 2
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icone: {
    marginRight: 12
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D6A4F'
  }
});
