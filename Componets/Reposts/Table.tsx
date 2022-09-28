/* eslint-disable */

import React, {useState} from 'react';
import {Clientes_Data} from '../Helpers/InitialValues';
import {Touch_Control} from '../Styles/Styles_Header';
import {
  Action_Button_Edit,
  Action_Button_Trash,
  Container_Body_Data_Table,
  Container_Body_Table,
  Container_Header_Table,
  Container_Table,
  ScrollView_Body_Table,
  Title_Body_Table,
  Title_Table,
} from '../Styles/Styles_Table';

const Table = () => {
  const [clients, setClients] = useState(Clientes_Data);

  return (
    <Container_Table>
      <Container_Header_Table>
        <Title_Table>Name</Title_Table>
        <Title_Table>City</Title_Table>
        <Title_Table>Phone</Title_Table>
        <Title_Table>Action</Title_Table>
      </Container_Header_Table>
      <Container_Body_Table>
        <ScrollView_Body_Table>
          {clients.map(client => (
            <Container_Body_Data_Table key={client.id}>
              <Title_Body_Table>{client.name} </Title_Body_Table>
              <Title_Body_Table>{client.city} </Title_Body_Table>
              <Title_Body_Table>{client.phone} </Title_Body_Table>
              <Touch_Control>
                <Action_Button_Edit
                  source={require('../Images/Controls/edit.png')}
                />
              </Touch_Control>
              <Touch_Control>
                <Action_Button_Trash
                  source={require('../Images/Controls/trash.png')}
                />
              </Touch_Control>
            </Container_Body_Data_Table>
          ))}
        </ScrollView_Body_Table>
      </Container_Body_Table>
    </Container_Table>
  );
};

export default Table;
