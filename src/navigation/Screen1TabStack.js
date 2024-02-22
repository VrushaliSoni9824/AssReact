import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {  SCREEN1 } from '../constants/Screens';
import { Screen1 } from '../screens';
const Screen1TabStack = ({navigation}) => {
    const Screent1Stack = createStackNavigator();
    return (
        <Screent1Stack.Navigator headerShown={false} >
            <Screent1Stack.Screen name={SCREEN1} component={Screen1}  options={{headerShown: false  }} />
        </Screent1Stack.Navigator>
    )
}
export default Screen1TabStack
const styles = StyleSheet.create({})
