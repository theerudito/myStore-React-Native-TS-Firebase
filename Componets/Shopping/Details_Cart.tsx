/* eslint-disable */

import React from 'react';
import {
  Container_Table_Cart,
  Image_Trash_Cart,
  Title_Table_Cart,
  Trash_Cart,
} from '../Styles/Styles_Cart';

const Details_Cart = ({item, handleDelete}: any) => {
  const {quantity, name, price} = item;
  return (
    <Container_Table_Cart key={item.id}>
      <Title_Table_Cart>{quantity}</Title_Table_Cart>
      <Title_Table_Cart>{name}</Title_Table_Cart>
      <Title_Table_Cart>{price.toFixed(2)}</Title_Table_Cart>
      <Title_Table_Cart>{(price * quantity).toFixed(2)}</Title_Table_Cart>
      <Trash_Cart onPress={() => handleDelete(item.id)}>
        <Image_Trash_Cart source={require('../Images/Controls/trash.png')} />
      </Trash_Cart>
    </Container_Table_Cart>
  );
};

export default Details_Cart;
