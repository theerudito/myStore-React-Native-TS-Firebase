/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {
  Button_Product_Control,
  ContainerInput2_Product,
  Container_Add_Product,
  Container_Inputs_Product,
  Image_Product,
  Input_Product,
  Input_Product_2,
  Input_Product_3,
  Text_Button_Product,
} from '../Styles/Styles_Add_Product';
import Header from '../Header/Header';

const Add_Product = () => {
  return (
    <Container_Add_Product>
      <Image_Product source={require('../Images/Controls//image.png')} />

      <Container_Inputs_Product>
        <Input_Product placeholder="Name" />
        <Input_Product placeholder="Brand" />
        <Input_Product placeholder="Description" />
      </Container_Inputs_Product>

      <ContainerInput2_Product>
        <Input_Product_2 placeholder="Cant" />
        <Input_Product_3 placeholder="Price" />
      </ContainerInput2_Product>

      <Button_Product_Control>
        <Text_Button_Product>SAVE</Text_Button_Product>
      </Button_Product_Control>
    </Container_Add_Product>
  );
};

export default Add_Product;
