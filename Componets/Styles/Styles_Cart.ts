/* eslint-disable */
import styled from 'styled-components/native';

export const Container_Cart = styled.View`
  background-color: #fff;
  width: 100%;
  height: 90%;
`;

export const Container_Detalle_Cart = styled.View`
  background-color: gray;
  flex-direction: row;
  width: 95%;
  height: 4%;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px;
  margin-top: 30px;
`;

export const Titles_Detalle_Cart = styled.Text`
  color: black;
`;

export const Scroll_Cart_Details = styled.ScrollView`
  width: 100%;
  height: 20%;
`;

export const Container_Table_Cart = styled.View`
  background-color: #f5f5f5;
  flex-direction: row;
  margin-top: 2px;
  width: 95%;
  height: 4%;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px;
`;

export const Title_Table_Cart = styled.Text`
  color: black;
`;

export const Container_Total_Cart = styled.View`
  margin-top: 15px;
  margin-left: auto;
  margin-right: 10px;
  flex-direction: row;
`;

export const Title_Total_Cart_Text = styled.Text`
  font-size: 20px;
`;

export const Title_Total_Cart = styled.Text`
  font-size: 20px;
  background-color: #0099ff;
  border-radius: 10px;
  width: 100px;
  align-items: center;
  text-align: center;
`;

export const Container_Details_Infor_Cart = styled.View`
  align-self: center;
  width: 100%;
  height: 70%;
  margin-top: 10px;
  padding: 10px;
`;

export const Title_Input_Cart = styled.Text`
  color: black;
`;

export const Inputs_Details_Cart = styled.TextInput`
  background-color: #f5f5f5;
  width: 90%;
  height: 40px;
  align-self: center;
  margin-top: 15px;
`;

export const Button_Buy_Cart = styled.TouchableOpacity`
  background-color: #0099ff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40px;
  align-self: center;
  margin-top: -80px;
`;

export const Button_Buy_Cart_Text = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Trash_Cart = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Image_Trash_Cart = styled.Image`
  width: 40px;
  height: 60px;
  margin-top: 15px;
`;
