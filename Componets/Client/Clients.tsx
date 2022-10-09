/* eslint-disable */
import styled from 'styled-components/native';
import React, {useEffect} from 'react';
import Componet_Seach from '../Header/Componet_Seach';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {getClients, loadingData} from '../Store/slices/products';

const Clients = ({navigation}: any) => {
  const ico_Add = require('../Images/Controls/add.png');
  const dispatch = useDispatch();
  const {isLoading = false, clients = []} = useSelector(
    (state: any) => state.products,
  );

  const handle_Add_Client = () => {
    navigation.navigate('Add_Clients');
  };

  const handleEditClient = () => {
    navigation.navigate('Add_Clients');
  };

  const ReadFirebaseClients = async () => {
    dispatch(loadingData(true));
    try {
      const collectionClients = await firestore().collection('clients').get();
      const dataClients = collectionClients.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(getClients(dataClients));
      dispatch(loadingData(false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClients = (id: any) => {
    firestore()
      .collection('clients')
      .doc(id)
      .delete()
      .then(() => {
        alert('User deleted!');
      });
    ReadFirebaseClients();
  };

  useEffect(() => {
    ReadFirebaseClients();
  }, []);

  return (
    <Container_Clients>
      <Componet_Seach image={ico_Add} handle_Add_Client={handle_Add_Client} />

      <Container_Header_Table>
        <Title_Table>Name</Title_Table>
        <Title_Table>City</Title_Table>
        <Title_Table>Phone</Title_Table>
        <Title_Table>Action</Title_Table>
      </Container_Header_Table>

      <FlatList
        onRefresh={ReadFirebaseClients}
        refreshing={isLoading}
        data={clients}
        keyExtractor={(item): any => item.id}
        renderItem={({item}) => (
          <Table_Clients
            item={item}
            handleEditClient={handleEditClient}
            handleDeleteClients={handleDeleteClients}
          />
        )}
      />
    </Container_Clients>
  );
};

export default Clients;

const Table_Clients = ({item, handleEditClient, handleDeleteClients}: any) => {
  const ico_Trash = require('../Images/Controls/trash.png');
  const ico_Edit = require('../Images/Controls/edit.png');

  return (
    <Container_Table>
      <Container_Body_Data_Table>
        <Title_Body_Table>{item.name} </Title_Body_Table>
        <Title_Body_Table>{item.city} </Title_Body_Table>
        <Title_Body_Table>{item.phone} </Title_Body_Table>

        <Touch_Control onPress={() => handleEditClient(item.id)}>
          <Action_Button_Edit source={ico_Edit} />
        </Touch_Control>

        <Touch_Control onPress={() => handleDeleteClients(item.id)}>
          <Action_Button_Trash source={ico_Trash} />
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
  width: 100px;
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
