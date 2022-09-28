/* eslint-disable */

import React from 'react';

import {
  Container_Header,
  Image_Back,
  Image_Burger,
  Title_Header,
  Touch_Control,
} from '../Styles/Styles_Header';

const Header = ({title}: string) => {
  return (
    <Container_Header>
      <Touch_Control>
        <Image_Burger source={require('../Images/Controls/burger.png')} />
      </Touch_Control>

      <Title_Header>{title} </Title_Header>

      <Touch_Control>
        <Image_Back source={require('../Images/Controls/back.png')} />
      </Touch_Control>
    </Container_Header>
  );
};

export default Header;
