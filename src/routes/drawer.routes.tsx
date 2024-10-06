import {createDrawerNavigator} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; // para icones

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
       <Drawer.Navigator screenOptions={{title:''}}>
        <Drawer.Screen
          name="home" //nao pode ter nome de rotas iguais
          component={TabRoutes} //inves de redenrizar outra tela, ele redenriza outra rota (sem precisar clicar, ele que chama o menubutton)
          options={{
            //aqui é drawerIcon pq é drawer
            drawerIcon:({color,size}) => <Feather name="home" color={color} size={size}/>,
            drawerLabel: 'Início'
        }} 
        />

        <Drawer.Screen
          name="Profile" //nao pode ter nome de rotas iguais
          component={StackRoutes} //inves de redenrizar outra tela, ele redenriza outra rota (sem precisar clicar, ele que chama o menubutton)
          options={{
            //aqui é drawerIcon pq é drawer
            drawerIcon:({color,size}) => <Feather name="user" color={color} size={size}/>,
            drawerLabel: 'Meu Perfil'
        }} 
        />
       </Drawer.Navigator>
    )
}