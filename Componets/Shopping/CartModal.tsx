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
import React from 'react';
import {ContainerSVGWaves} from '../Styles/StyleApp';
import {ButtonWave, TopWave} from '../SVG/Waves';
import {
  ContainerHeader,
  ImageKart_Sopping,
  Image_Burger,
  TitleShopping,
  TouchableHighlight_Control_Store,
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
  Titles_Detalle_Cart,
  Title_Input_Cart,
  Title_Table_Cart,
  Title_Total_Cart,
  Title_Total_Cart_Text,
  Trash_Cart,
} from '../Styles/Styles_Cart';

const CartModal = ({setModalVisible}: any) => {
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Modal visible={setModalVisible(true)}>
      <ContainerSVGWaves>
        <TopWave />
      </ContainerSVGWaves>

      <ContainerHeader>
        <TouchableHighlight_Control_Store>
          <Image_Burger source={require('../Images/Controls/burger.png')} />
        </TouchableHighlight_Control_Store>

        <TitleShopping>Cart</TitleShopping>

        <TouchableHighlight_Control_Store onPress={() => closeModal()}>
          <ImageKart_Sopping source={require('../Images/Controls/back.png')} />
        </TouchableHighlight_Control_Store>
      </ContainerHeader>

      <Container_Detalle_Cart>
        <Titles_Detalle_Cart>Cant</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Details</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Unitary</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>P_Total</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>Actions</Titles_Detalle_Cart>
      </Container_Detalle_Cart>

      <Container_Table_Cart>
        <Title_Table_Cart>1</Title_Table_Cart>
        <Titles_Detalle_Cart>Product1</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>$ 1.00</Titles_Detalle_Cart>
        <Titles_Detalle_Cart>$ 1.00</Titles_Detalle_Cart>
        <Trash_Cart>
          <Image_Trash_Cart source={require('../Images/Controls/trash.png')} />
        </Trash_Cart>
      </Container_Table_Cart>
      <hr />

      <Container_Total_Cart>
        <Title_Total_Cart_Text>Total: </Title_Total_Cart_Text>
        <Title_Total_Cart>$ 1000</Title_Total_Cart>
      </Container_Total_Cart>

      <Container_Details_Infor_Cart>
        {/* <Title_Input_Cart>Name</Title_Input_Cart> */}
        <Inputs_Details_Cart placeholder="Name" />
        {/* <Title_Input_Cart>Email</Title_Input_Cart> */}
        <Inputs_Details_Cart placeholder="Email" />
        {/* <Title_Input_Cart>Phone</Title_Input_Cart> */}
        <Inputs_Details_Cart placeholder="Phone" />
      </Container_Details_Infor_Cart>

      <Button_Buy_Cart>
        <Button_Buy_Cart_Text>TO BUY</Button_Buy_Cart_Text>
      </Button_Buy_Cart>

      <ContainerSVGWaves>
        <ButtonWave />
      </ContainerSVGWaves>
    </Modal>
  );
};

export default CartModal;
