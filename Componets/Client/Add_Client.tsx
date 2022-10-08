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

const Add_Client = ({navigation}: any) => {
  const [dataUser, setDataUser] = useState({
    name: '',
    direction: '',
    phone: '',
    email: '',
    city: '',
  });

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
    await firestore()
      .collection('clients')
      .add({
        name: dataUser.name,
        direction: dataUser.direction,
        phone: dataUser.phone,
        email: dataUser.email,
        city: dataUser.city,
      })
      .then(() => {
        alert('User added!');
      });
    setDataUser({
      name: '',
      direction: '',
      phone: '',
      email: '',
      city: '',
    });

    navigation.navigate('Clients');
  };

  const handleChange = (name: string, value: string) => {
    setDataUser({...dataUser, [name]: value});
  };

  return (
    <Container_Add_Clients>
      <Container_Inputs_Client>
        <Input_Client
          placeholder="Name"
          name="name"
          value={dataUser.name}
          onChangeText={value => handleChange('name', value)}
        />
        <Input_Client
          placeholder="Direction"
          name="direction"
          value={dataUser.direction}
          onChangeText={value => handleChange('direction', value)}
        />
        <Input_Client
          placeholder="Phone"
          name="phone"
          value={dataUser.phone}
          onChangeText={value => handleChange('phone', value)}
        />
        <Input_Client
          placeholder="Email"
          name="email"
          value={dataUser.email}
          onChangeText={value => handleChange('email', value)}
        />
        <Input_Client
          placeholder="City"
          name="city"
          value={dataUser.city}
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
