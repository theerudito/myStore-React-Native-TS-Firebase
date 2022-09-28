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
import {ButtonWave, TopWave} from './Componets/SVG/Waves';

const App = () => {
  return (
    <Provider store={store}>
      <ContainerPrincipalPage>
        <ContainerSVGWaves>
          <TopWave />
        </ContainerSVGWaves>
        {/* <Shopping /> */}
        {/* <Home /> */}
        {/* <Auth /> */}
        {/* <Clients  /> */}
        {/* <Products /> */}
        {/* <Add_Product /> */}
        <Add_Client />
        <ContainerSVGWaves>
          <ButtonWave />
        </ContainerSVGWaves>
      </ContainerPrincipalPage>
    </Provider>
  );
};

export default App;
