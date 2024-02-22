import React,{useEffect} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, ScrollView, Title, Caption, Linking, Alert } from 'react-native'
import {
    DrawerItem
  } from '@react-navigation/drawer';
  import { useDispatch, useSelector } from "react-redux";
 
import Bottom from './Bottom';
import { logout } from "../Store/user/actions";
import Logout from "../screens/Logout";
import { LOGOUTSCREEN } from "../constants/Screens";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { clearAsyncStorage, clearAsyncData } from "../utils";
import { ASYNC_LOGIN_KEY } from "../constants/Strings";
import { SafeAreaView } from "react-native-safe-area-context";


const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();
  const actionLogout = async() => {
    dispatch(logout());
    await clearAsyncData(ASYNC_LOGIN_KEY);
  }  
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
          <View style={styles.row}>
            <View style={{width: '30%'}}>
              <Image style={styles.displayImage} source={require('../assets/no-image.png')} />
            </View>
            <View styles={{ width: '70%', marginLeft: 20,  }}>
              <Text style={{ fontWeight: 'bold', color: '#087E8B', fontSize: 15 ,marginTop: 20}}>Hi Vrushali</Text>
            </View>
          </View>  
        </View>
        <DrawerItem label="Logout" onPress={actionLogout}
          icon = {({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}  />
      </ScrollView>
    </SafeAreaView>
   );
  }


const DrawerNavigation = ({reduxUser}) => {
  const Drawer = createDrawerNavigator();
    return(
      <Drawer.Navigator
      headerShown={false}
      drawerContent={(props) => <CustomDrawerContent {...props} reduxUser={reduxUser} />}
      >
             <Drawer.Screen name="HomeDrawer" component={Bottom}
              options={{
                headerShown: false
              }}
            /> 
            <Drawer.Screen name={LOGOUTSCREEN} component={Logout}
              options={{
                headerShown: false
              }}
            /> 
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  displayImage: {
    width: 60,
    height: 60,
    borderRadius:50
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},
});

export default DrawerNavigation;

