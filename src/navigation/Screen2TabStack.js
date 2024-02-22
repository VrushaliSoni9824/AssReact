import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN1 } from '../constants/Screens';
import { Screen2 } from '../screens'


const Screen2TabStack = ({navigation}) => {
    const Screen2Stack = createStackNavigator();
    return (
        <Screen2Stack.Navigator headerShown={false} >
          <Screen2Stack.Screen name={SCREEN1} component={Screen2}  options={{headerShown: false  }} />
        </Screen2Stack.Navigator>
    )
}

export default Screen2TabStack

const styles = StyleSheet.create({})
