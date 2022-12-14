/* eslint-disable */
import styled from 'styled-components/native';

export const ContainerShopping = styled.View`
  background-color: white;
  width: 100%;
  height: 95%;
`;

export const ContainerHeader = styled.View`
  align-items: center;
  width: 15%;
  height: 10%;
  justify-content: center;
  left: 20%;
  margin-top: 10px;
  margin-left: 250px;
`;

export const Cant_Kart_Sopping = styled.Text`
  color: white;
  background-color: red;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
`;

export const ImageKart_Sopping = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: -10px;
`;

export const Container_Card_Shopping = styled.View`
background-color: white;
width: auto;

`;

export const Container_Card_Body_Shopping = styled.View`
  background-color: #202124;
  width: 180px;
  height: 260px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Image_Card_Shopping = styled.Image`
  width: 80px;
  height: 100px;
  align-self: center;
  margin-top: 5px;
  resize-mode: contain;
`;

export const Title_Product_Sopping = styled.Text`
  color: white;
  align-self: center;
  overflow: hidden;
  width: 90%;
  margin-top: -1px;


`;
export const Title_Mark_Sopping = styled(Title_Product_Sopping)``;
export const Title_Description_Sopping = styled(Title_Product_Sopping)``;
export const Title_Price_Sopping = styled(Title_Product_Sopping)``;

export const Button_Card_Shopping = styled.TouchableOpacity`
  align-self: center;
  background-color: #0099ff;
  border-radius: 10px;
  width: 80%;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Button_Card_Shopping_Text = styled.Text`
  align-self: center;
  color: white;
`;

export const Container_Card_Pages = styled.View`
  width: 100%;
  height: 1%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Card_Pages = styled.Text`
  color: white;
  padding: 5px;
  align-self: center;
  margin-top: 10px;
  z-index: 5;
  position: relative;
`;

export const Image_Control_Store = styled.Image`
  width: 25px;
  height: 25px;
  align-self: center;
  margin-top: 30px;
  resize-mode: contain;
`;

export const Touch_Control_Store = styled.TouchableOpacity``;

export const Container_Add_More = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text_Increment_Decrement = styled.Text`
  color: white;
  width: 30px;
  background-color: #0099ff;
  align-items: center;
  text-align: center;
  margin-top: 5px;
`;
export const Text_Cant_Product = styled.Text`
  color: white;
  width: 30px;
  background-color: white;
  align-items: center;
  text-align: center;
  color: black;
  margin-top: 5px;
`;
