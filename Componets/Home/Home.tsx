/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {
  Container_Home,
  Container_Home_Header_Title,
  Container_Home_Header,
  Title_Home_User,
  Image_Home,
  Title_Home_Developer,
  Title_Home_Version,
  Image_User,
  ContainerBody_Home,
} from '../Styles/Styles_Home';
import {
  ContainerHeader,
  Image_Burger,
  TitleShopping,
  Touch_Control_Store,
} from '../Styles/Styles_Shopping';

const Home = ({navigation}: any) => {
  const handleBurger = () => {
    navigation.navigate('Notifications');
  };

  return (
    <Container_Home>
      <Container_Home_Header>
        <Touch_Control_Store onPress={handleBurger}>
          <Image_Burger source={require('../Images/Controls/burger.png')} />
        </Touch_Control_Store>
        <Container_Home_Header_Title>MY STORE</Container_Home_Header_Title>
      </Container_Home_Header>

      <ContainerBody_Home>
        <Image_User source={require('../Images/Controls/avatar.png')} />
        <Title_Home_User>WELCOME: JORGE LOOR</Title_Home_User>
        <Image_Home source={require('../Images/Controls/store.png')} />
        <Title_Home_Developer>By Jorge Loor 2022</Title_Home_Developer>
        <Title_Home_Version>v1.020</Title_Home_Version>
      </ContainerBody_Home>
    </Container_Home>
  );
};

export default Home;
