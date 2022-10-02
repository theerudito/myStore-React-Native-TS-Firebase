/* eslint-disable */
import {View, Text} from 'react-native';
import React from 'react';
import Home from '../Home/Home';
import {Shopping} from '../Shopping/Shopping';
import Auth from '../Auth/Auth';
import Clients from '../Client/Clients';
import Add_Client from '../Client/Add_Client';
import Products from '../Products/Products';
import Add_Product from '../Products/Add_Product';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Menu_Burger = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shopping" component={Shopping} />
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Clients" component={Clients} />
      <Drawer.Screen name="Add Clients" component={Add_Client} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Add-Products" component={Add_Product} />
    </Drawer.Navigator>
  );
};

export default Menu_Burger;
