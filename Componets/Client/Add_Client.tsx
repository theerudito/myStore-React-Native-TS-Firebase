/* eslint-disable */

import React, {useState} from 'react';
import {
  Button_Client_Control,
  Container_Add_Clients,
  Container_Inputs_Client,
  Input_Client,
  Text_Button_Client,
} from '../Styles/Styles_Add_Client';
import firestore from '@react-native-firebase/firestore';
import {dataClientNew} from '../Helpers/InitialValues';
import {useDispatch} from 'react-redux';
import {loadingData} from '../Store/slices/products';

const Add_Client = ({navigation}: any) => {
  const [dataClient, setDataClient] = useState(dataClientNew);
  const dispatch = useDispatch();

  const handleEditClient = async () => {
    firestore()
      .collection('Users')
      .doc('ABC')
      .update({
        age: 31,
      })
      .then(() => {
        console.log('User updated!');
      });
  };

  const handleAddClient = async () => {
    dispatch(loadingData(true));
    await firestore()
      .collection('clients')
      .add({
        name: dataClient.name,
        direction: dataClient.direction,
        phone: dataClient.phone,
        email: dataClient.email,
        city: dataClient.city,
      })
      .then(() => {
        alert('client added!');
      });
    setDataClient(dataClientNew);
    navigation.navigate('Clients');
    dispatch(loadingData(false));
  };

  const handleChange = (name: string, value: string) => {
    setDataClient({...dataClient, [name]: value});
  };

  return (
    <Container_Add_Clients>
      <Container_Inputs_Client>
        <Input_Client
          placeholder="Name"
          name="name"
          value={dataClient.name}
          onChangeText={value => handleChange('name', value)}
        />
        <Input_Client
          placeholder="Direction"
          name="direction"
          value={dataClient.direction}
          onChangeText={value => handleChange('direction', value)}
        />
        <Input_Client
          placeholder="Phone"
          name="phone"
          value={dataClient.phone}
          onChangeText={value => handleChange('phone', value)}
        />
        <Input_Client
          placeholder="Email"
          name="email"
          value={dataClient.email}
          onChangeText={value => handleChange('email', value)}
        />
        <Input_Client
          placeholder="City"
          name="city"
          value={dataClient.city}
          onChangeText={value => handleChange('city', value)}
        />
      </Container_Inputs_Client>

      <Button_Client_Control onPress={() => handleAddClient()}>
        <Text_Button_Client>SAVE</Text_Button_Client>
      </Button_Client_Control>
    </Container_Add_Clients>
  );
};

export default Add_Client;
