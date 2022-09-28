/* eslint-disable */

import React from 'react';
import {Container_Clients} from '../Styles/Styles_Clients';
import Header from '../Header/Header';
import Componet_Seach from '../Header/Componet_Seach';
import Table from '../Reposts/Table';

const Clients = () => {

  const title: string = 'Clients';
  const image = require('../Images/Controls/add.png');
  return (
    <Container_Clients>
      <Header  title={title}  />
      <Componet_Seach image={image}  />
      <Table />
    </Container_Clients>
  );
};

export default Clients;
