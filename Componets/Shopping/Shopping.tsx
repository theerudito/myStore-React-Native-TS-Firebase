/* eslint-disable */
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {
  Button_Card_Shopping,
  Button_Card_Shopping_Text,
  Cant_Kart_Sopping,
  Card_Pages,
  ContainerHeader,
  ContainerShopping,
  Container_Add_More,
  Container_Card_Body_Shopping,
  Container_Card_Pages,
  Container_Card_Shopping,
  ImageKart_Sopping,
  Image_Card_Shopping,
  Image_Control_Store,
  Scroll_Card_Shopping,
  Text_Cant_Product,
  Text_Increment_Decrement,
  Title_Description_Sopping,
  Title_Mark_Sopping,
  Title_Price_Sopping,
  Title_Product_Sopping,
  Touch_Control_Store,
} from '../Styles/Styles_Shopping';
import {ProductShoopping} from '../Helpers/InitialValues';
import {getProducts, loadingData} from '../Store/slices/products';

import {ContainerSVGWaves} from '../Styles/StyleApp';
import {ButtonWave, TopWave} from '../SVG/Waves';
import {AddCart, addCounter, getTotal} from '../Store/slices/cart';

import Componet_Seach from '../Header/Componet_Seach';
import {FlatList, StyleSheet} from 'react-native';
import Shooping_Card from './Shooping_Card';
import firestore from '@react-native-firebase/firestore';


export const Shopping = ({navigation}: any) => {
  const {isLoading = true, products = []} = useSelector(
    (state: any) => state.products,
  );
  const {cart} = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const readAllProducts = async () => {
    dispatch(loadingData(true));
    try {
      const productCollectios = await firestore().collection('products').get();
      const dataProducts = productCollectios.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(getProducts(dataProducts));
      dispatch(loadingData(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readAllProducts();
  }, []);

  const addToCart = (num: number, item: any) => {
    dispatch(addCounter(num));
    dispatch(AddCart(item));
    dispatch(getTotal(item.price));
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
        <Touch_Control_Store onPress={() => cartDetails()}>
          <Cant_Kart_Sopping>{cart.length} </Cant_Kart_Sopping>
          <ImageKart_Sopping source={require('../Images/Controls/cart.png')} />
        </Touch_Control_Store>
      </ContainerHeader>

      <Componet_Seach />

      <FlatList
        onRefresh={readAllProducts}
        numColumns={2}
        refreshing={isLoading}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Shooping_Card item={item} addToCart={addToCart} />
        )}
      />

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
