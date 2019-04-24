/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert } from 'react-native';
import AreaChart from './charts/AreaChart';
import { VictoryAxis } from 'victory-native';
import BarChart from './charts/BarChart';

export default class App extends Component {

  render() {

    const RetirementData=[{
      age:60,expense:60000
    },{
      age:65,expense:45000
    },{age:70,expense:79000},{age:75,expense:40000}];
    const FutureExpense=[{
      age:60,expense:10000
    },{
      age:65,expense:15000
    },{
      age:70,expense:20000
    },{
      age:75,expense:5000
    }]
    return (
      <View style={styles.container}>
     
        <AreaChart sampleData={RetirementData}
        yTickFormat={(x)=>(`$-${x/ 1000}k`)}
        x="age" y="expense"/>
        <BarChart yTickFormat={(x)=>(`$-${x/ 1000}k`)}
        x="age" y="expense" sampleData={FutureExpense}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
