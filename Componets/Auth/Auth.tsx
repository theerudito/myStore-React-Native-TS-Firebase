/* eslint-disable */

import React from 'react';
import {
  Container_Auth,
  Image_Auth,
  Image_Google_in,
  Image_Google_up,
  Title_Auth,
  Touch_Auth,
} from '../Styles/Styles_Auth';

const Auth = () => {
  return (
    <Container_Auth>
      <Title_Auth>YOUR STORE</Title_Auth>
      <Image_Auth source={require('../Images/Controls/logo_store.png')} />
      <Touch_Auth>
        <Image_Google_in source={require('../Images/Controls/google_in.png')} />
      </Touch_Auth>
      {/* <Touch_Auth>
        <Image_Google_up source={require('../Images/Controls/google_up.png')} />
      </Touch_Auth> */}
    </Container_Auth>
  );
};

export default Auth;
