/* eslint-disable */
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import uuid from 'react-native-uuid';

const Image_Add = () => {
  const ico_Add = require('./Componets/Images/Controls/add.png');
  const [image, setImage] = useState(null);
  const [change, setChange] = useState(false);
  const [url_Image, setUrl_Image] = useState();
  const [uploading, setUploading] = useState(false);
  const [progress, setprogress] = useState(0);
  const nameImage = uuid.v4().slice(0, 8);

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

    const uploadImage = async () => {
      setUrl_Image(nameImage as any);
      const reference = storage().ref(`/imgProducts/${nameImage}`);
      const pathToFile = image;
      const task = reference.putFile(pathToFile as any);
    };
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
        onPress={Image_Add}
        style={{backgroundColor: 'red', width: 100, height: 50, marginTop: 10}}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Image_Add;
