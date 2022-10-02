/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {
  Container_Search,
  Image_Add_Client,
  Image_Search,
  Input_Search,
  Title_Search,
} from '../Styles/Styles_Seach';
import {Touch_Control} from '../Styles/Styles_Header';

const Componet_Seach = ({image, handle_Add_Client, handle_Add_Product}) => {
  return (
    <Container_Search>
      <Touch_Control onPress={handle_Add_Product || handle_Add_Client}>
        <Image_Add_Client source={image} />
      </Touch_Control>

      <Title_Search>Seach:</Title_Search>
      <Image_Search source={require('../Images/Controls/lupa.png')} />
      <Input_Search placeholder="Searching" />
    </Container_Search>
  );
};

export default Componet_Seach;
