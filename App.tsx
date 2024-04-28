import React, { Component } from 'react'
import { View } from 'react-native'
import CalculatorComponent from './src/screen/CalculatorComponent'


export default class App extends Component {
  render() {
    return (
      <View>
        <CalculatorComponent></CalculatorComponent>
      </View>
    )
  }
}
