/* eslint-disable */
import styled from 'styled-components/native';
import React, {useState} from 'react';
import Componet_Seach from '../Header/Componet_Seach';
import {FlatList} from 'react-native';
import {Clientes_Data} from '../Helpers/InitialValues';

const Clients = ({navigation}: any) => {
  const image = require('../Images/Controls/add.png');
  const [clientsData, setClientsData] = useState(Clientes_Data);

  const handle_Add_Client = () => {
    navigation.navigate('Add_Clients');
  };

  return (
    <Container_Clients>
      <Componet_Seach image={image} handle_Add_Client={handle_Add_Client} />

      <Container_Header_Table>
        <Title_Table>Name</Title_Table>
        <Title_Table>City</Title_Table>
        <Title_Table>Phone</Title_Table>
        <Title_Table>Action</Title_Table>
      </Container_Header_Table>

      <FlatList
        data={clientsData}
        keyExtractor={(item): any => item.id}
        renderItem={({item}) => <Table_Clients item={item} />}
      />
    </Container_Clients>
  );
};

export default Clients;

const Table_Clients = ({item}: any) => {
  const {name, city, phone} = item;

  return (
    <Container_Table>
      <Container_Body_Data_Table>
        <Title_Body_Table>{name} </Title_Body_Table>
        <Title_Body_Table>{city} </Title_Body_Table>
        <Title_Body_Table>{phone} </Title_Body_Table>
        <Touch_Control>
          <Action_Button_Edit source={require('../Images/Controls/edit.png')} />
        </Touch_Control>
        <Touch_Control>
          <Action_Button_Trash
            source={require('../Images/Controls/trash.png')}
          />
        </Touch_Control>
      </Container_Body_Data_Table>
    </Container_Table>
  );
};

export const Container_Clients = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 10px;
  background-color: #fff;
`;


const Container_Table = styled.View`
  width: 100%;
`;

const Container_Header_Table = styled.View`
  flex-direction: row;
  background-color: gray;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title_Table = styled.Text``;

const Title_Body_Table = styled.Text`
  width: 120px;
`;

const Container_Body_Data_Table = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const Action_Button_Trash = styled.Image`
  width: 30px;
  height: 30px;
`;

const Action_Button_Edit = styled.Image`
  width: 20px;
  height: 20px;
`;

const Touch_Control = styled.TouchableOpacity``;
