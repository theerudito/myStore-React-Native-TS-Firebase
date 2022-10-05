/* eslint-disable */

import {Provider} from 'react-redux';

import {store} from './Componets/Store';
import {
  ContainerPrincipalPage,
  ContainerSVGWaves,
} from './Componets/Styles/StyleApp';
import {ButtonWave, TopWave} from './Componets/SVG/Waves';
import {NavigationContainer} from '@react-navigation/native';
import Menu_Burger from './Componets/Burger/Menu_Burger';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Menu_Burger />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
