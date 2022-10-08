/* eslint-disable */

import React, {useState} from 'react';
import {
  Button_Product_Control,
  ContainerInput2_Product,
  Container_Add_Product,
  Container_Inputs_Product,
  Image_Product,
  Input_Product,
  Input_Product_2,
  Input_Product_3,
  Text_Button_Product,
} from '../Styles/Styles_Add_Product';
import firestore from '@react-native-firebase/firestore';

const Add_Product = ({navigation}: any) => {
  const ico_Product = require('../Images/Controls//image.png');
  const [dataProduct, setDataProduct] = useState({
    name: '',
    brand: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });

  const handleOnChange = (name: string, value: string) => {
    setDataProduct({...dataProduct, [name]: value});
  };

  const handleAddProduct = async () => {
    await firestore()
      .collection('products')
      .add({
        name: dataProduct.name,
        brand: dataProduct.brand,
        direction: dataProduct.description,
        price: dataProduct.price,
        stock: dataProduct.stock,
        image: dataProduct.image,
      })
      .then(() => {
        alert('product added!');
      });
    setDataProduct({
      name: '',
      brand: '',
      description: '',
      price: '',
      stock: '',
      image: '',
    });

    navigation.navigate('Products');
  };

  return (
    <Container_Add_Product>
      <Image_Product source={ico_Product} />

      <Container_Inputs_Product>
        <Input_Product
          placeholder="Name"
          name="name"
          value={dataProduct.name}
          onChangeText={value => handleOnChange('name', value)}
        />
        <Input_Product
          placeholder="Brand"
          name="brand"
          value={dataProduct.brand}
          onChangeText={value => handleOnChange('brand', value)}
        />
        <Input_Product
          placeholder="Description"
          name="description"
          value={dataProduct.description}
          onChangeText={value => handleOnChange('description', value)}
        />
      </Container_Inputs_Product>

      <ContainerInput2_Product>
        <Input_Product_2
          placeholder="Stock"
          name="stock"
          value={dataProduct.stock}
          onChangeText={value => handleOnChange('stock', value)}
        />
        <Input_Product_3
          placeholder="Price"
          name="price"
          value={dataProduct.price}
          onChangeText={value => handleOnChange('price', value)}
        />
      </ContainerInput2_Product>

      <Button_Product_Control onPress={handleAddProduct}>
        <Text_Button_Product>SAVE</Text_Button_Product>
      </Button_Product_Control>
    </Container_Add_Product>
  );
};

export default Add_Product;
