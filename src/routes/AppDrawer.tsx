import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Cardapio } from '../Cardapio';
import { Estoque } from '../Estoque';

const Drawer = createDrawerNavigator();

export function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color="#000"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}
    >
      <Drawer.Screen name="Cardapio" component={Cardapio} />
      <Drawer.Screen name="Estoque" component={Estoque} />
    </Drawer.Navigator>
  );
}
