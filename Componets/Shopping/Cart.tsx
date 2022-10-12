/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {ContainerSVGWaves} from '../Styles/StyleApp';
import {ButtonWave, TopWave} from '../SVG/Waves';

import {
  Button_Buy_Cart,
  Button_Buy_Cart_Text,
  Container_Cart,
  Container_Details_Infor_Cart,
  Container_Detalle_Cart,
  Container_Total_Cart,
  Inputs_Details_Cart,
  Titles_Detalle_Cart,
  Title_Details_Cart,
  Title_Input_Cart,
  Title_Total_Cart,
  Title_Total_Cart_Text,
} from '../Styles/Styles_Cart';
import {useSelector, useDispatch} from 'react-redux';
import {getPayment, getTotal, removeCart} from '../Store/slices/cart';
import {FlatList} from 'react-native';
import Details_Cart from './Details_Cart';
import {Text} from 'react-native';
import {paymetData} from '../Helpers/InitialValues';
import firestore from '@react-native-firebase/firestore';

const Cart = ({navigation}: any) => {
  const fech = new Date();
  console.log(fech);
  const {
    cart = [],
    total,
    datetails = [],
  } = useSelector((state: any) => state.cart);
  const [data_Payment, setData_Payment] = useState(paymetData);
  const numeroFact = 1223;
  const fecha = new Date();
  const dia = fecha.getDay();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();
  const {name, email, phone} = data_Payment;
  const dispatch = useDispatch();

  const handleOnChange = (e: any, name: string) => {
    setData_Payment({...data_Payment, [name]: e.nativeEvent.text});
  };

  useEffect(() => {
    dispatch(getTotal(0));
  }, []);

  const handleDelete = (id: any) => {
    dispatch(removeCart(id));
    dispatch(getTotal(0));
  };

  const handleBuy = async () => {
    const data = Object.assign({
      
      fech,
      dia,
      mes,
      año,
      total,
      name,
      email,
      phone,
    });

    if (cart.length > 0) {
      await firestore().collection('details').add({
        data,
      });

      dispatch(getPayment(data));
      setData_Payment(paymetData);
      alert('Compra realizada con exito');
    } else {
      alert('No hay productos en el carrito');
    }
  };
  return (
    <Container_Cart>
      <Container_Detalle_Cart>
        <Titles_Detalle_Cart>Cant</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Details</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Unitary</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Total</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Actions</Titles_Detalle_Cart>
      </Container_Detalle_Cart>

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Details_Cart item={item} handleDelete={handleDelete} />
        )}
      />

      <Container_Total_Cart>
        <Title_Total_Cart_Text>Total: </Title_Total_Cart_Text>
        <Title_Total_Cart>$ {total.toFixed(2)} </Title_Total_Cart>
      </Container_Total_Cart>

      <Title_Details_Cart>DETAILS:</Title_Details_Cart>

      <Container_Details_Infor_Cart>
        {/* <Title_Input_Cart>Name</Title_Input_Cart> */}
        <Inputs_Details_Cart
          placeholder="Name"
          name="name"
          value={data_Payment.name}
          onChange={e => handleOnChange(e, 'name')}
        />

        {/* <Title_Input_Cart>Email</Title_Input_Cart> */}
        <Inputs_Details_Cart
          placeholder="Email"
          name="email"
          value={data_Payment.email}
          onChange={e => handleOnChange(e, 'email')}
        />
        {/* <Title_Input_Cart>Phone</Title_Input_Cart> */}
        <Inputs_Details_Cart
          placeholder="Phone"
          name="phone"
          value={data_Payment.phone}
          onChange={e => handleOnChange(e, 'phone')}
        />

        <Button_Buy_Cart onPress={() => handleBuy()}>
          <Button_Buy_Cart_Text>TO BUY</Button_Buy_Cart_Text>
        </Button_Buy_Cart>
      </Container_Details_Infor_Cart>
    </Container_Cart>
  );
};

export default Cart;
