/* eslint-disable */
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ContainerSVGWaves} from '../Styles/StyleApp';
import {ButtonWave, TopWave} from '../SVG/Waves';
import {
  ContainerHeader,
  ImageKart_Sopping,
  Image_Burger,
  TitleShopping,
  Touch_Control_Store,
} from '../Styles/Styles_Shopping';
import {
  Button_Buy_Cart,
  Button_Buy_Cart_Text,
  Container_Details_Infor_Cart,
  Container_Detalle_Cart,
  Container_Table_Cart,
  Container_Total_Cart,
  Image_Trash_Cart,
  Inputs_Details_Cart,
  Scroll_Cart_Details,
  Titles_Detalle_Cart,
  Title_Input_Cart,
  Title_Table_Cart,
  Title_Total_Cart,
  Title_Total_Cart_Text,
  Trash_Cart,
} from '../Styles/Styles_Cart';
import {useSelector, useDispatch} from 'react-redux';
import {
  getDetails,
  getPayment,
  getTotal,
  removeCart,
} from '../Store/slices/cart';

const CartModal = ({setModalVisible}: any) => {
  const {
    cart = [],
    total,
    payment = [],
  } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [data_Payment, setData_Payment] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleOnChange = (e: any, name: string) => {
    setData_Payment({...data_Payment, [name]: e.nativeEvent.text});
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(getTotal(0));
  }, []);

  const handleDelete = (id: any) => {
    dispatch(removeCart(id));
    dispatch(getTotal(0));
  };

  const handleBuy = () => {
    if (cart.length > 0) {
      dispatch(getPayment(data_Payment));
      setData_Payment({name: '', email: '', phone: ''});
      Alert.alert('Compra realizada con exito');
      dispatch(getDetails({payment, cart}));
    } else {
      Alert.alert('No hay productos en el carrito');
    }
  };
  return (
    <Modal visible={setModalVisible(true)}>
      <ContainerSVGWaves>
        <TopWave />
      </ContainerSVGWaves>

      <ContainerHeader>
        <Touch_Control_Store>
          <Image_Burger source={require('../Images/Controls/burger.png')} />
        </Touch_Control_Store>

        <TitleShopping>Cart</TitleShopping>

        <Touch_Control_Store onPress={() => closeModal()}>
          <ImageKart_Sopping source={require('../Images/Controls/back.png')} />
        </Touch_Control_Store>
      </ContainerHeader>

      <Container_Detalle_Cart>
        <Titles_Detalle_Cart>Cant</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Details</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Unitary</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Total</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Actions</Titles_Detalle_Cart>
      </Container_Detalle_Cart>

      {cart.map((item: any) => {
        return (
          <Container_Table_Cart key={item.id}>
            <Title_Table_Cart>{item.quantity}</Title_Table_Cart>
            <Title_Table_Cart>{item.name}</Title_Table_Cart>
            <Title_Table_Cart>{item.price.toFixed(2)}</Title_Table_Cart>
            <Title_Table_Cart>
              {(item.price * item.quantity).toFixed(2)}
            </Title_Table_Cart>
            <Trash_Cart onPress={() => handleDelete(item.id)}>
              <Image_Trash_Cart
                source={require('../Images/Controls/trash.png')}
              />
            </Trash_Cart>
          </Container_Table_Cart>
        );
      })}

      <Container_Total_Cart>
        <Title_Total_Cart_Text>Total: </Title_Total_Cart_Text>
        <Title_Total_Cart>$ {total.toFixed(2)} </Title_Total_Cart>
      </Container_Total_Cart>

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
      </Container_Details_Infor_Cart>

      <Button_Buy_Cart onPress={() => handleBuy()}>
        <Button_Buy_Cart_Text>TO BUY</Button_Buy_Cart_Text>
      </Button_Buy_Cart>

      <ContainerSVGWaves>
        <ButtonWave />
      </ContainerSVGWaves>
    </Modal>
  );
};

export default CartModal;
