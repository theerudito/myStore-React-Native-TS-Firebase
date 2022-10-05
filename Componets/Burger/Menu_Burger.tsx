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
import Cart from '../Shopping/Cart';
import Reports from '../Reposts/Reports';
const Drawer = createDrawerNavigator();

const Menu_Burger = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shopping" component={Shopping} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Clients" component={Clients} />
      <Drawer.Screen name="Add_Clients" component={Add_Client} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Add_Products" component={Add_Product} />
      <Drawer.Screen name="Reports" component={Reports} />
    </Drawer.Navigator>
  );
};

export default Menu_Burger;
