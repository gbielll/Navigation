import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../profile/index'; // Ajuste o caminho conforme necessário
import New from '../newscreen/index'; // Ajuste o caminho conforme necessário
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; // para icones

const Tab = createBottomTabNavigator(); // Criação do Bottom Tab Navigator

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Exibe o cabeçalho
        headerTitleAlign: 'center', // Centraliza o título
      }}
    >
      <Tab.Screen
        name="profile" // Nome da rota
        component={Profile} // Componente que é renderizado na tela
        options={{
          //o options usada para passar configurações para a tela específica
          //tabBarIcon personaliza o icon
          tabBarIcon: ({color,size}) => <Feather name="home" color={color} size={size}/>,
          tabBarLabel:'Home'
        }} 
      />
      <Tab.Screen
        name="new" // Nome da rota
        component={New} // Componente do New
        options={{
          tabBarIcon: ({color,size}) => <Feather name="plus"  color={color} size={size} />,
          tabBarLabel:'Nova tela'
        }} 
      />
    </Tab.Navigator>

  );
}
