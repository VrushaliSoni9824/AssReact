import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Splash, Login } from '../screens';
import DrawerNavigation from './DrawerNavigation'
import { PureNativeButton } from "react-native-gesture-handler/lib/typescript/components/GestureButtons";

const Stack = createStackNavigator();

export default navigation = () => {
    return(
    <Stack.Navigator
      headerShown={false}
    >
      {/* <Stack.Screen name="AppUpdate" component={AppUpdate} options={{       
        headerShown: false
      }}/> */}
      <Stack.Screen name="Splash" component={Splash} options={{       
        headerShown: false
      }}/>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
     
      <Stack.Screen name="MemberNav" component={DrawerNavigation}
        options={{
          title: 'Purie',
          headerShown: false
        }}
      />
    </Stack.Navigator>
    )
}