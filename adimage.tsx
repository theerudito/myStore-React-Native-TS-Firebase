/* eslint-disable */
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Image_Add = () => {
  const [image, setImage] = useState(null);
  const [change, setChange] = useState(false);
  const ico_Add = require('./Componets/Images/Controls/add.png');
  const [url_Image, setUrl_Image] = useState();

  const get_Url_Image = async () => {
    const url = await storage()
      .ref(`/imgProducts/${url_Image}`)
      .getDownloadURL();
    console.log(url);
  };

  const add_Image = async () => {
    try {
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

      setChange(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openGalery = () => {
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
    <View>
      <TouchableOpacity onPress={openGalery}>
        <Image
          source={change ? {uri: image} : ico_Add}
          style={{width: 200, height: 200}}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="ss"
        style={{borderWidth: 1, borderColor: 'black', width: 100, height: 100}}
      />
      <TouchableOpacity
        onPress={add_Image}
        style={{backgroundColor: 'red', width: 100, height: 50, marginTop: 10}}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Image_Add;
