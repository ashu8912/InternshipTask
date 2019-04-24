import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {VictoryChart,VictoryTheme, VictoryArea,VictoryAxis,VictoryClipContainer, VictoryLine, VictoryBar, VictoryTooltip,VictoryVoronoiContainer} from "victory-native";
export default class AreaChart extends Component {
  render() {
    const {sampleData,yTickFormat,x,y}=this.props; 
    return (
      <View style={{marginLeft:10}}>
      <VictoryChart
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          labels={d => "(age=" + d.age + ";expense=" + d.expense + ")"}
        />
      }
    >
    <VictoryAxis style={{tickLabels:{fontWeight:"bold"}}}/>
    <VictoryAxis dependentAxis tickFormat={yTickFormat}
    style={{tickLabels:{fontWeight:"bold"}}}/>
      <VictoryArea
        data={sampleData}
        x={x}
        y={y}
        interpolation="natural"
        groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
        style={{ data: { stroke: "green", strokeWidth: 2, strokeLinecap: "round",fillOpacity:"0.1",fill:"#228B22"}}}
        labelComponent={<VictoryTooltip/>}
        />
    </VictoryChart>
      </View>
    )
  }
}