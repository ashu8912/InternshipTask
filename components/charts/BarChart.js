import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {VictoryBar, VictoryChart, VictoryTheme,VictoryAxis} from "victory-native";
export default class BarChart extends Component {
  render() {
      const {sampleData,yTickFormat,x,y}=this.props;
    return (
      <View style={{marginLeft:10}}>
     <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
     <VictoryAxis style={{tickLabels:{fontWeight:"bold"}}}/>
     <VictoryAxis dependentAxis tickFormat={yTickFormat}
     style={{tickLabels:{fontWeight:"bold"}}}/>
     <VictoryBar style={{ data: { fill: "blue" } }}
     data={sampleData} x={x} y={y}
     cornerRadius={{top:4,bottom:4}}
     barWidth={10}/>
     
     </VictoryChart>
      </View>
    )
  }
}