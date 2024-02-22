import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN3 } from '../constants/Screens';
import { Screen3 } from '../screens';

const Screen3TabStack = ({navigation}) => {
    const Screen3Stack = createStackNavigator();
    return (
        <Screen3Stack.Navigator headerShown={false} >
          <Screen3Stack.Screen name={SCREEN3} component={Screen3}  options={{headerShown: false  }} />
        </Screen3Stack.Navigator>
    )
}

export default Screen3TabStack

const styles = StyleSheet.create({})
