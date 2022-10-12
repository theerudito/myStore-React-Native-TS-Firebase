/* eslint-disable */
import {View, Text} from 'react-native';
import React from 'react';
import {
  Button_Card_Shopping,
  Button_Card_Shopping_Text,
  Container_Add_More,
  Container_Card_Body_Shopping,
  Container_Card_Shopping,
  Image_Card_Shopping,
  Text_Cant_Product,
  Text_Increment_Decrement,
  Title_Description_Sopping,
  Title_Mark_Sopping,
  Title_Price_Sopping,
  Title_Product_Sopping,
  Touch_Control_Store,
} from '../Styles/Styles_Shopping';

const Shooping_Card = ({item, addToCart}: any) => {
  const {name, description, price, brand, image} = item;
  return (
    <Container_Card_Shopping>
      <Container_Card_Body_Shopping>
        <Image_Card_Shopping source={{uri: image}} />
        <Title_Product_Sopping>Name: {name} </Title_Product_Sopping>
        <Title_Mark_Sopping>Brand: {brand} </Title_Mark_Sopping>
        <Title_Description_Sopping>
          Desc: {description}
        </Title_Description_Sopping>
        <Title_Price_Sopping>Price: $ {price} </Title_Price_Sopping>

        <Container_Add_More>
          <Touch_Control_Store>
            <Text_Increment_Decrement>-</Text_Increment_Decrement>
          </Touch_Control_Store>

          <Text_Cant_Product>10</Text_Cant_Product>

          <Touch_Control_Store>
            <Text_Increment_Decrement>+</Text_Increment_Decrement>
          </Touch_Control_Store>
        </Container_Add_More>

        <Button_Card_Shopping onPress={() => addToCart(1, item)}>
          <Button_Card_Shopping_Text>ADD TO CART</Button_Card_Shopping_Text>
        </Button_Card_Shopping>
      </Container_Card_Body_Shopping>
    </Container_Card_Shopping>
  );
};

export default Shooping_Card;
