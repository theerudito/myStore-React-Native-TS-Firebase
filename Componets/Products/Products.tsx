/* eslint-disable */
import styled from 'styled-components/native';
import React, {useState} from 'react';

import Componet_Seach from '../Header/Componet_Seach';
import {ProductShoopping} from '../Helpers/InitialValues';
import {FlatList} from 'react-native';

const Products = ({navigation}: any) => {
  const image = require('../Images/Controls/add-product.png');
  const [productData, setproductData] = useState(ProductShoopping);

  const handle_Add_Product = () => {
    navigation.navigate('Add_Products');
  };

  return (
    <Container_Products>
      <Componet_Seach image={image} handle_Add_Product={handle_Add_Product} />

      <Container_Header_Table>
        <Title_Table>Cant</Title_Table>
        <Title_Table>Name</Title_Table>
        <Title_Table>V_Unitary</Title_Table>
        <Title_Table>Action</Title_Table>
      </Container_Header_Table>

      <FlatList
        data={productData}
        keyExtractor={(item): any => item.id}
        renderItem={({item}) => <Table_Products item={item} />}
      />
    </Container_Products>
  );
};

export default Products;

const Table_Products = ({item}: any) => {
  const {cant, name, price} = item;

  return (
    <Container_Table>
      <Container_Body_Data_Table>
        <Title_Body_Table>{cant} </Title_Body_Table>
        <Title_Body_Table>{name} </Title_Body_Table>
        <Title_Body_Table>{price} </Title_Body_Table>
        <Touch_Control>
          <Action_Button_Edit source={require('../Images/Controls/edit.png')} />
        </Touch_Control>
        <Touch_Control>
          <Action_Button_Trash
            source={require('../Images/Controls/trash.png')}
          />
        </Touch_Control>
      </Container_Body_Data_Table>
    </Container_Table>
  );
};

const Container_Products = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 10px;
  background-color: white;
`;

const Container_Table = styled.View`
  width: 100%;
`;

const Container_Header_Table = styled.View`
  flex-direction: row;
  background-color: gray;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title_Table = styled.Text``;

const Title_Body_Table = styled.Text`
  width: 100px;
`;

const Container_Body_Data_Table = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const Action_Button_Trash = styled.Image`
  width: 30px;
  height: 30px;
`;

const Action_Button_Edit = styled.Image`
  width: 20px;
  height: 20px;
`;

const Touch_Control = styled.TouchableOpacity``;
