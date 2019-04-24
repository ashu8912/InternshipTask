import React from 'react'
import { View, Text,Button} from 'react-native'
import DonutChart from './charts/DonutChart';

class IncomeExpenses extends React.Component {
  
  render()
  {
  const IncomeAndExpenses= [{ x: "47.5% Mics Inflow", y: 35 }]
  return (
    <View>
    <DonutChart sampleData={IncomeAndExpenses}/>
  </View>
  )
}
}

export default IncomeExpenses
