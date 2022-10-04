/* eslint-disable */

import React from 'react';
import {Container_Clients} from '../Styles/Styles_Clients';
import Componet_Seach from '../Header/Componet_Seach';
import Table from '../Reposts/Table';

const Clients = ({navigation}: any) => {
  const image = require('../Images/Controls/add.png');

  const handle_Add_Client = () => {
    navigation.navigate('Add_Clients');
  };

  return (
    <Container_Clients>
      <Componet_Seach image={image} handle_Add_Client={handle_Add_Client} />
      <Table />
    </Container_Clients>
  );
};

export default Clients;
