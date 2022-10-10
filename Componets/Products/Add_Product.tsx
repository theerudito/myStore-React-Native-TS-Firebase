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
  Touch_Image_Product,
} from '../Styles/Styles_Add_Product';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {dataProductNew} from '../Helpers/InitialValues';

const Add_Product = ({navigation}: any) => {
  const ico_Product = require('../Images/Controls//image.png');
  const [dataProduct, setDataProduct] = useState(dataProductNew);
  const [image, setImage] = useState(null);
  const [change, setChange] = useState(false);
  const [url_Image, setUrl_Image] = useState();

  const handleOnChange = (name: string, value: string) => {
    setDataProduct({...dataProduct, [name]: value});
  };

  const get_Url_Image = async () => {
    const url = await storage()
      .ref(`/imgProducts/${url_Image}`)
      .getDownloadURL();
    setUrl_Image(url);
    console.log(url);
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
        image: url_Image,
      })

      .then(() => {
        alert('product added!');
        const ramdom = Math.random().toString(36).substring(7);
        setUrl_Image(ramdom.toString());
        const reference = storage().ref(`/imgProducts/${ramdom}`);
        const pathToFile = image;
        const task = reference.putFile(pathToFile as any);

        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });
        task.then(() => {
          console.log('Image uploaded to the bucket!');

          get_Url_Image();
        });
      });
    setChange(false);
    setDataProduct(dataProductNew);

    //navigation.navigate('Products');
  };

  const openGaleryLoad = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('User cancelled image upload');
      } else {
        const path = response.assets[0].uri;
        setImage(path);
        setChange(true);
      }
    });
  };

  return (
    <Container_Add_Product>
      <Touch_Image_Product onPress={openGaleryLoad}>
        <Image_Product source={change ? {uri: image} : ico_Product} />
      </Touch_Image_Product>

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
