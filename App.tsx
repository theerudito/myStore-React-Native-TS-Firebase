/* eslint-disable */

import {Provider} from 'react-redux';
import Auth from './Componets/Auth/Auth';
import Add_Client from './Componets/Client/Add_Client';
import Clients from './Componets/Client/Clients';
import Home from './Componets/Home/Home';
import Add_Product from './Componets/Products/Add_Product';
import Products from './Componets/Products/Products';
import {Shopping} from './Componets/Shopping/Shopping';
import {store} from './Componets/Store';
import {
  ContainerPrincipalPage,
  ContainerSVGWaves,
} from './Componets/Styles/StyleApp';
import {ButtonWave, TopWave, WaveButton, WaveTOP} from './Componets/SVG/Waves';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import Menu_Burger from './Componets/Burger/Menu_Burger';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ContainerPrincipalPage>
        {/* <ContainerSVGWaves>
          <TopWave />
        </ContainerSVGWaves> */}

        <WaveTOP />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Shooping"
              component={Shopping}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Clients"
              component={Clients}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Products"
              component={Products}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Add_Product "
              component={Add_Product}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Add_Client "
              component={Add_Client}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>

        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Burger" component={Menu_Burger} />
        </Drawer.Navigator> */}

        {/* <ContainerSVGWaves>
          <ButtonWave />
        </ContainerSVGWaves> */}

        <WaveButton />
      </ContainerPrincipalPage>
    </Provider>
  );
};

export default App;
