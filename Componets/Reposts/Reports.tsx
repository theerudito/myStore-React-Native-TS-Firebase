/* eslint-disable */
import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Clientes_Docu} from '../Helpers/InitialValues';
import Componet_Seach from '../Header/Componet_Seach';
import {FlatList} from 'react-native';
const image = require('../Images/Controls/reports.png');

const Reports = () => {
  const [dataReports, setDataReports] = useState(Clientes_Docu);

  return (
    <Container_Reports>
      <Componet_Seach image={image} />

      <Container_Header_Table>
        <Title_Table>Client</Title_Table>
        <Title_Table>#Doc</Title_Table>
        <Title_Table>Date</Title_Table>
        <Title_Table>Total</Title_Table>
      </Container_Header_Table>

      <FlatList
        data={dataReports}
        keyExtractor={(item): any => item.id}
        renderItem={({item}) => <Table_Products item={item} />}
      />
    </Container_Reports>
  );
};

export default Reports;

const Table_Products = ({item}: any) => {
  const {name, date, total, doc} = item;

  return (
    <Container_Table>
      <Container_Body_Data_Table>
        <Title_Body_Table>{name} </Title_Body_Table>
        <Title_Body_Table>{doc} </Title_Body_Table>
        <Title_Body_Table>{date} </Title_Body_Table>
        <Title_Body_Table>{total} </Title_Body_Table>
      </Container_Body_Data_Table>
    </Container_Table>
  );
};

const Container_Reports = styled.View`
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
  padding: 0 10px;
`;

const Title_Table = styled.Text`
  color: white;
  background-color: gray;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Title_Body_Table = styled.Text`
  width: 140px;
  color: black;
`;

const Container_Body_Data_Table = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

const Action_Button_See = styled.Image`
  width: 30px;
  height: 30px;
`;

const Touch_Control = styled.TouchableOpacity``;
