import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoProps {
    titulo: string;
    onPress: () => void;
    disabled?: boolean;
}
export function BotaoLaranja({ titulo, onPress }: BotaoProps) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderColor: '#F4A261',
        borderRadius: 6,
        backgroundColor: '#F4A261',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 130,
        marginVertical: 10,
        minWidth: 100,
    },
    texto: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F5F5F0'

    }

})