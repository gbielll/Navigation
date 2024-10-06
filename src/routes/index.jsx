import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importando o NavigationContainer
import DrawerRoutes from '../routes//drawer.routes'; // Ajuste o caminho conforme necessário

export default function Routes() {
   //todas rotas de navegção que eu for fazer, deve ser colocado dentro do navigationContainer 
   //Drawer tem q ser o principal, pra nao sumir o menu hambugue das telas
  return (
    <NavigationContainer>
      <DrawerRoutes/> 
    </NavigationContainer>
  );
}
