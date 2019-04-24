import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {VictoryChart,VictoryLine,VictoryClipContainer} from "victory-native";
export default class LineChart extends Component {
  render() {
    return (
      <View>
      <VictoryChart>
      <VictoryLine
        data={[
          { x: 1, y: 4 },
          { x: 2, y: 3 },
          { x: 3, y: 1 },
          { x: 4, y: 2 },
          { x: 5, y: 3 },
          { x: 6, y: 3 },
          { x: 7, y: 2 }
        ]}
        interpolation="natural"
        groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
        style={{ data: { stroke: "blue", strokeWidth: 3, strokeLinecap: "round" }}}
      />
    </VictoryChart>
      </View>
    )
  }
}