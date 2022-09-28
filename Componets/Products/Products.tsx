/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {Container_Products} from '../Styles/Styles_Products';
import Header from '../Header/Header';
import Componet_Seach from '../Header/Componet_Seach';
import Table from '../Reposts/Table';

const Products = () => {
  const title: string = 'Products';
  const image = require('../Images/Controls/add-product.png');

  return (
    <Container_Products>
      <Header title={title} />
      <Componet_Seach image={image} />
      <Table />
    </Container_Products>
  );
};

export default Products;
