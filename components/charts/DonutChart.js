import React from 'react'
import { View, Text } from 'react-native'
import { VictoryPie, VictoryTooltip} from 'victory-native';

export default class DonutChart extends React.Component{
  render()
  {const {sampleData}=this.props;
    return (
    <View style={{height:600,overflow:"visible"}}>
    <VictoryPie data={sampleData} colorScale={["blue"]} innerRadius={110}
    labelComponent={<VictoryTooltip/>}
    labelPosition={"centroid"}
    labelRadius={100}/>
    </View>
  )}
}

