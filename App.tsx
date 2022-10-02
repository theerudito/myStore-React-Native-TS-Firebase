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

import Menu_Burger from './Componets/Burger/Menu_Burger';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ContainerPrincipalPage>

        <ContainerSVGWaves>
          <TopWave />
        </ContainerSVGWaves>

        <NavigationContainer>
          <Menu_Burger />
        </NavigationContainer>

        <ContainerSVGWaves>
          <ButtonWave />
        </ContainerSVGWaves>
        
      </ContainerPrincipalPage>
    </Provider>
  );
};

export default App;
