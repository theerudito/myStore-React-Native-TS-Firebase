/* eslint-disable */
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
  Button_Card_Shopping,
  Button_Card_Shopping_Text,
  Cant_Kart_Sopping,
  Card_Pages,
  CartDetails,
  CartOpacity,
  ContainerBurger,
  ContainerHeader,
  ContainerKart_Sopping,
  ContainerShopping,
  Container_Add_More,
  Container_Card_Body_Shopping,
  Container_Card_Pages,
  Container_Card_Shopping,
  Container_Search_Sopping,
  ImageKart_Sopping,
  Image_Burger,
  Image_Card_Shopping,
  Image_Control_Store,
  InputAdd,
  Input_Search_Sopping,
  Lupa_Search_Sopping,
  Scroll_Card_Shopping,
  Text_Increment_Decrement,
  TitleShopping,
  Title_Description_Sopping,
  Title_Mark_Sopping,
  Title_Price_Sopping,
  Title_Product_Sopping,
  Title_Search_Sopping,
  Touch_Control_Store,
} from '../Styles/Styles_Shopping';
import {ProductShoopping} from '../Helpers/InitialValues';
import {getProducts} from '../Store/slices/products';

import {ContainerSVGWaves} from '../Styles/StyleApp';
import {ButtonWave, TopWave} from '../SVG/Waves';
import {AddCart, addCounter} from '../Store/slices/cart';
import CartModal from './Cart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Componet_Seach from '../Header/Componet_Seach';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

export const Shopping = ({navigation}) => {
  const {products = []} = useSelector((state: any) => state.products);
  const {cart} = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(ProductShoopping));
  }, []);

  const addToCart = (num: number, item: any) => {
    dispatch(addCounter(num));
    dispatch(AddCart(item));
  };

  const pageLeft = () => {
    console.log('pageLeft');
  };

  const pageRight = () => {
    console.log('pageRight');
  };

  const cartDetails = () => {
    navigation.navigate('Cart');
  };

  return (
    <ContainerShopping>
      <ContainerHeader>
        <Touch_Control_Store>
          <Image_Burger source={require('../Images/Controls/burger.png')} />
        </Touch_Control_Store>

        <TitleShopping>Shopping</TitleShopping>

        <Touch_Control_Store onPress={() => cartDetails()}>
          <Cant_Kart_Sopping>{cart.length} </Cant_Kart_Sopping>
          <ImageKart_Sopping source={require('../Images/Controls/cart.png')} />
        </Touch_Control_Store>
      </ContainerHeader>

      {/* <Container_Search_Sopping>
        <Title_Search_Sopping>Seach: </Title_Search_Sopping>
        <Input_Search_Sopping placeholder="Searching" />
        <Lupa_Search_Sopping source={require('../Images/Controls/lupa.png')} />
      </Container_Search_Sopping> */}

      <Componet_Seach />

      <Scroll_Card_Shopping>
        <Container_Card_Shopping>
          {products.map((item: any) => (
            <Container_Card_Body_Shopping key={item.id}>
              <Touch_Control_Store>
                <Image_Card_Shopping source={item.image} />
                <Title_Product_Sopping>
                  Name: {item.name}{' '}
                </Title_Product_Sopping>
                <Title_Mark_Sopping>Brand: {item.brand} </Title_Mark_Sopping>
                <Title_Description_Sopping>
                  Desc: {item.description}
                </Title_Description_Sopping>
                <Title_Price_Sopping>
                  Price: $ {item.price}{' '}
                </Title_Price_Sopping>

                <Container_Add_More>
                  <Touch_Control_Store>
                    <Text_Increment_Decrement>-</Text_Increment_Decrement>
                  </Touch_Control_Store>

                  <InputAdd placeholder="0" />

                  <Touch_Control_Store>
                    <Text_Increment_Decrement>+</Text_Increment_Decrement>
                  </Touch_Control_Store>
                </Container_Add_More>

                <Button_Card_Shopping onPress={() => addToCart(1, item)}>
                  <Button_Card_Shopping_Text>
                    ADD TO CART
                  </Button_Card_Shopping_Text>
                </Button_Card_Shopping>
              </Touch_Control_Store>
            </Container_Card_Body_Shopping>
          ))}
        </Container_Card_Shopping>
      </Scroll_Card_Shopping>

      <Container_Card_Pages>
        <Touch_Control_Store onPress={() => pageLeft()}>
          <Image_Control_Store
            source={require('../Images/Controls/left.png')}
          />
        </Touch_Control_Store>

        <Card_Pages>Page: 1011</Card_Pages>

        <Touch_Control_Store onPress={() => pageRight()}>
          <Image_Control_Store
            source={require('../Images/Controls/right.png')}
          />
        </Touch_Control_Store>
      </Container_Card_Pages>
    </ContainerShopping>
  );
};
