/* eslint-disable */
import styled from 'styled-components/native';
import React, {useEffect} from 'react';

import Componet_Seach from '../Header/Componet_Seach';
import {FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {getDetails, loadingData} from '../Store/slices/products';

const Reports = () => {
  const image = require('../Images/Controls/reports.png');
  const {isLoading = true, details = []} = useSelector(
    (state: any) => state.products,
  );
  const dispatch = useDispatch();

  const readAllDetails = async () => {
    dispatch(loadingData(true));
    try {
      const detailsCollectios = await firestore().collection('details').get();
      const dataProducts = detailsCollectios.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(getDetails(dataProducts));
      dispatch(loadingData(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readAllDetails();
  }, []);

  const buyTotal = details.reduce((acc: any, item: any) => {
    return acc + item.data.total;
  }, 0);

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
        onRefresh={readAllDetails}
        refreshing={isLoading}
        data={details}
        keyExtractor={(item): any => item.id}
        renderItem={({item}) => <Table_Products item={item} />}
      />

      <Container_Total_Report>
        <Total_Report>Total: ${buyTotal} </Total_Report>
      </Container_Total_Report>
    </Container_Reports>
  );
};

export default Reports;

const Table_Products = ({item}: any) => {
  const {name, numDoc, total, dateDoc} = item.data;

  return (
    <Container_Table>
      <Container_Body_Data_Table>
        <Title_Body_Table>{name} </Title_Body_Table>
        <Title_Body_Table>{numDoc} </Title_Body_Table>
        <Title_Body_Table>{dateDoc} </Title_Body_Table>
        <Title_Body_Table>{total.toFixed(2)} </Title_Body_Table>
      </Container_Body_Data_Table>
    </Container_Table>
  );
};

const Container_Reports = styled.View`
  width: 100%;
  height: 100%;
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
  width: 110px;
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

const Total_Report = styled.Text`
  width: 200px;
  height: 40px;
  color: white;
  background-color: gray;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
`;

const Container_Total_Report = styled.View`
  margin-left: auto;
  margin-right: 10px;
`;
