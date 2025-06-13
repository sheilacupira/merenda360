import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Login } from './src/Login';
import { ModoCozinha } from './src/ModoCozinha';
import { Cardapio } from './src/Cardapio';
import { Estoque } from './src/Estoque';


export type RootStackParamList = {
  Login: undefined;
  ModoCozinha: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="ModoCozinha" component={ModoCozinha} />
  <Stack.Screen name="Estoque" component={Estoque} />
  <Stack.Screen name="Cardapio" component={Cardapio} />
</Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
