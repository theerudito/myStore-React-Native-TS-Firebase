/* eslint-disable */
import styled from 'styled-components/native';

export const ContainerShopping = styled.View`
  background-color: white;
  width: 100%;
  height: 80%;
`;

export const TitleShopping = styled.Text`
  color: black;
  font-size: 20px;
  align-self: center;
  margin-top: -100px;
`;

export const CartOpacity = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 10px;
  padding: 10px;
  margin-top: -10px;
`;

export const ContainerKart_Sopping = styled.View`
  flex-direction: row;
  margin-top: -10px;
  margin-left: auto;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const Cant_Kart_Sopping = styled.Text`
  color: white;
  background-color: red;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: -30px;
  margin-top: -60px;
  text-align: center;
  z-index: -1;
`;

export const ImageKart_Sopping = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Container_Search_Sopping = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
`;

export const Title_Search_Sopping = styled.Text``;

export const Input_Search_Sopping = styled.TextInput`
  color: black;
  background-color: silver;
  width: 60%;
  border-radius: 10px;
  height: 40px;
`;

export const Lupa_Search_Sopping = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 240px;
  position: absolute;
`;

export const Container_Card_Shopping = styled.View`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Scroll_Card_Shopping = styled.ScrollView``;

export const Container_Card_Body_Shopping = styled.View`
  background-color: #202124;
  width: 45%;
  height: 25%;
  border-radius: 10px;
  margin-top: 20px;
  z-index: 5;
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
  margin-top: 5px;
`;
export const Title_Mark_Sopping = styled(Title_Product_Sopping)``;
export const Title_Description_Sopping = styled(Title_Product_Sopping)``;
export const Title_Price_Sopping = styled(Title_Product_Sopping)``;

export const Button_Card_Shopping = styled.TouchableOpacity`
  align-self: center;
  background-color: purple;
  border-radius: 10px;
  width: 80%;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Button_Card_Shopping_Text = styled.Text`
  align-self: center;
  color: white;
`;

export const Container_Card_Pages = styled.View`
  width: 100%;
  height: 10%;
  z-index: -5;
`;

export const Card_Pages = styled.Text`
  color: black;
  padding: 5px;
  align-self: center;
`;
