/* eslint-disable */

import {Provider} from 'react-redux';
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
        <Shopping />
        <ContainerSVGWaves>
          <ButtonWave />
        </ContainerSVGWaves>
      </ContainerPrincipalPage>
    </Provider>
  );
};

export default App;
