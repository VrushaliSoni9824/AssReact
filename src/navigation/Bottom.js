import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen1TabStack from './Screen1TabStack';
import Screen2TabStack from './Screen2TabStack';
import Screen3TabStack from './Screen3TabStack';
import { SCREEN1, MANAGESUBSCRIPTIONSSCREEN } from '../constants/Screens';
import {useSelector} from 'react-redux'

const Tab = createBottomTabNavigator();

export default Bottom = () => {

  const reduxUser = useSelector(state => state.user);


    return (
        <Tab.Navigator 
        headerShown={false}
          screenOptions={{
            tabBarStyle: {
              paddingTop: 10,
              paddingBottom: 5,
              height: 60,
              overflow: 'hidden'
            }
          }}
        >
        <Tab.Screen name={SCREEN1} component={Screen1TabStack} 
            options={{
              headerShown: false,
              tabBarLabel:'',
              tabBarIcon: ({focused}) => {
                return (
                (!focused) 
                ?
                <>
                <Icon name="home-outline" color="#087E8B" size={23} />
                <Text style={{fontSize: 12, color: '#087E8B',}}>Home</Text>
                </>
                :
                <>
                <Icon name="home" color="#087E8B" size={23} />
                <Text style={{fontWeight: 'bold', color: '#087E8B', fontSize: 12}}>Home</Text>
                </>
                );
              }
            }}
        />
        
        <Tab.Screen name="Screen2TabStack" component={Screen2TabStack} options={{
              headerShown: false,
              tabBarLabel:'',
              tabBarIcon: ({focused}) => {
                return (
                (!focused) 
                ?
                <>
                <Icon name="cart-outline" color="#087E8B" size={23} />
                <View style={{'flexDirection': 'row'}}>
                <Text style={{fontSize: 12, color: '#087E8B'}}>Cart </Text>
                </View>
                </>
                :
                <>
                <Icon name="cart" color="#087E8B" size={23} />
                <View style={{'flexDirection': 'row'}}>
                <Text style={{fontSize: 12, color: '#087E8B', fontWeight: 'bold'}}>Cart </Text>
                </View>
                </>
                );
              }
            }}/>

          <Tab.Screen name="Screen3TabStack" component={Screen3TabStack} options={{
              headerShown: false,
              tabBarLabel:'',
              tabBarIcon: ({focused}) => {
                return (
                (!focused) 
                ?
                <>
                <Icon name="cart-outline" color="#087E8B" size={23} />
                <View style={{'flexDirection': 'row'}}>
                <Text style={{fontSize: 12, color: '#087E8B'}}>Cart </Text>
                </View>
                </>
                :
                <>
                <Icon name="cart" color="#087E8B" size={23} />
                <View style={{'flexDirection': 'row'}}>
                <Text style={{fontSize: 12, color: '#087E8B', fontWeight: 'bold'}}>Cart </Text>
              
                </View>
                </>
                );
              }
            }}/>


        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({})
