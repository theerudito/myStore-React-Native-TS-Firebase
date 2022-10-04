/* eslint-disable */

import React from 'react';
import {
  Button_Client_Control,
  Container_Add_Clients,
  Container_Inputs_Client,
  Input_Client,
  Text_Button_Client,
} from '../Styles/Styles_Add_Client';

const Add_Client = () => {
  return (
    <Container_Add_Clients>
      <Container_Inputs_Client>
        <Input_Client placeholder="Name" />
        <Input_Client placeholder="Direction" />
        <Input_Client placeholder="Phone" />
        <Input_Client placeholder="Email" />
        <Input_Client placeholder="City" />
      </Container_Inputs_Client>

      <Button_Client_Control>
        <Text_Button_Client>SAVE</Text_Button_Client>
      </Button_Client_Control>
    </Container_Add_Clients>
  );
};

export default Add_Client;
