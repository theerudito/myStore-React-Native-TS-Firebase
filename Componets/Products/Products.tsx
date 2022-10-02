/* eslint-disable */

import React from 'react';
import {Container_Products} from '../Styles/Styles_Products';
import Header from '../Header/Header';
import Componet_Seach from '../Header/Componet_Seach';
import Table from '../Reposts/Table';

const Products = ({navigation}) => {
  const image = require('../Images/Controls/add-product.png');

  const handle_Add_Product = () => {
    navigation.navigate('Add_Products');
  };

  return (
    <Container_Products>
      <Componet_Seach image={image} handle_Add_Product={handle_Add_Product} />
      <Table />
    </Container_Products>
  );
};

export default Products;
