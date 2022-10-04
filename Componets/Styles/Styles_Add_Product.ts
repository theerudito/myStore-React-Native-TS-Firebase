/* eslint-disable */
import styled from 'styled-components/native';

export const Container_Add_Product = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 90px;
  background-color: white;
`;

export const Image_Product = styled.Image`
  width: 50%;
  height: 50%;
  resize-mode: contain;
  align-self: center;
  margin-top: -60px;
`;

export const Container_Inputs_Product = styled.View`
  margin-top: -70px;
`;

export const Input_Product = styled.TextInput`
  background-color: #f5f5f5;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin-top: 15px;
  padding-left: 10px;
  align-self: center;
  justify-content: center;
`;

export const ContainerInput2_Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input_Product_2 = styled.TextInput`
  background-color: #f5f5f5;
  width: 30%;
  height: 50px;
  border-radius: 10px;
  margin-top: 15px;
  padding-left: 10px;
  align-self: center;
  justify-content: center;
`;

export const Input_Product_3 = styled(Input_Product_2)`
  margin-left: 40px;
`;

export const Button_Product_Control = styled.TouchableOpacity`
  background-color: #0099ff;
  width: 60%;
  height: 50px;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Text_Button_Product = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 20px;
  color: #fff;
`;
