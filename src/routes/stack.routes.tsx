import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabRoutes from './tab.routes';
import Profile from '../profile';

const Stack = createNativeStackNavigator();
//aqui no stack, quando eu clico em uma nova rota pelo drawer, ele chama outra tela (no caso aqui é o Profile), e some com aquele menubutton
export default function StackRoutes(){
    return(
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="home" //nao pode ter nome de rotas iguais no memso componente
          component={Profile}  
        />
       </Stack.Navigator>
    )
}