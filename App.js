/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from "react";
import {createAppContainer,createStackNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from './components/HomeScreen';
import NetWorth from './components/NetWorth';
import IncomeExpenses from './components/IncomeExpenses';

const AppNavigator=createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarIcon:()=><Icon name="home" size={30}/>
    }
  },
  NetWorth:{
    screen:NetWorth,
    navigationOptions:{
      tabBarIcon:()=><Icon name="money-bill-wave" size={30}/>
    }
  },
  IncomeExpense:{
    screen:IncomeExpenses,
    navigationOptions:{
      tabBarIcon:()=><Icon name="dollar-sign" size={30}/>
    }
  }
});
export default createAppContainer(AppNavigator);