import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, SafeAreaView, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes/types'; // Caminho correto agora
import { BotaoLaranja } from '../assets/components/BotaoLaranja';

// Tipagem da navegação
type LoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<LoginScreenProps>();

  const cpfValido = cpf.length === 11 && /^\d+$/.test(cpf);
  const camposPreenchidos = cpf !== '' && senha !== '' && cpfValido;

  const handleLogin = () => {
    if (!cpfValido) {
      Alert.alert('CPF inválido', 'Digite um CPF com 11 números.');
      return;
    }

    Alert.alert('Login realizado', `CPF: ${cpf}\nSenha: ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/logo360.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.inputs}
        placeholder="Digite seu CPF"
        keyboardType="numeric"
        maxLength={11}
        value={cpf}
        onChangeText={setCpf}
        placeholderTextColor="#2D6A4F"
      />

      <TextInput
        style={styles.inputs}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#2D6A4F"
      />

      <BotaoLaranja
        titulo="Entrar"
        onPress={handleLogin}
        disabled={!camposPreenchidos}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ModoCozinha')}>
        <Text style={styles.linkCozinha}>Entrar no Modo Cozinha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#2D6A4F',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  linkCozinha: {
    marginTop: 20,
    color: '#264653',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
});
