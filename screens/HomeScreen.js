import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { Icon } from 'native-base'

import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import ProductList from './ProductList'
import CartScreen from './CartScreen'
// import HistoryScreen from './HistoryScreen'


export default class HomeScreen extends Component {

  static navigationOptions = {

    header:null
    
  }

  render() {
    return (
        <AppContainer />
    )
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Product: { screen: ProductList },
  Cart: { screen: CartScreen },
  // History: {screen: HistoryScreen}

}, {
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:'bottom',
  tabBarOptions:{
    style:{
      ...Platform.select({
        android:{
            backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel:true,
    // showIcon:true,
  }

})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})